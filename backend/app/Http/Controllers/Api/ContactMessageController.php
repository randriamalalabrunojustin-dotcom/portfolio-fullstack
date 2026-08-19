<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContactMessageRequest;
use App\Mail\ContactMessageMail;
use App\Models\ContactMessage;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Mail;
use Throwable;

class ContactMessageController extends Controller
{
    /**
     * Enregistre un message envoyé depuis le portfolio
     * et envoie une notification par email.
     */
    public function store(StoreContactMessageRequest $request): JsonResponse
    {
        $contactMessage = ContactMessage::create([
            ...$request->validated(),
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
        ]);

        $mailSent = false;

        try {
            $recipient = config('mail.contact_to');

            if ($recipient) {
                Mail::to($recipient)
                    ->send(new ContactMessageMail($contactMessage));

                $mailSent = true;
            }
        } catch (Throwable $exception) {
            report($exception);
        }

        return response()->json([
            'success' => true,
            'message' => 'Votre message a bien été enregistré. Merci pour votre prise de contact.',
            'data' => [
                'id' => $contactMessage->id,
                'mail_sent' => $mailSent,
                'created_at' => $contactMessage->created_at?->toISOString(),
            ],
        ], 201);
    }
}