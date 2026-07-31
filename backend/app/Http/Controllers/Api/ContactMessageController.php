<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContactMessageRequest;
use App\Models\ContactMessage;
use Illuminate\Http\JsonResponse;

class ContactMessageController extends Controller
{
    /**
     * Enregistre un message envoyé depuis le portfolio.
     */
    public function store(StoreContactMessageRequest $request): JsonResponse
    {
        $contactMessage = ContactMessage::create([
            ...$request->validated(),
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Votre message a bien été enregistré. Merci pour votre prise de contact.',
            'data' => [
                'id' => $contactMessage->id,
                'created_at' => $contactMessage->created_at?->toISOString(),
            ],
        ], 201);
    }
}
