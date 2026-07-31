<?php

use App\Http\Controllers\Api\ContactMessageController;
use Illuminate\Support\Facades\Route;

Route::get('/health', fn () => response()->json([
    'success' => true,
    'message' => 'API opérationnelle',
]));

Route::post('/contact-messages', [ContactMessageController::class, 'store'])
    ->middleware('throttle:contact');
