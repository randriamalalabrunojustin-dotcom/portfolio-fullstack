<?php

namespace Tests\Feature;

use App\Models\ContactMessage;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ContactMessageTest extends TestCase
{
    use RefreshDatabase;

    public function test_health_endpoint_is_available(): void
    {
        $this->getJson('/api/health')
            ->assertOk()
            ->assertJson([
                'success' => true,
                'message' => 'API opérationnelle',
            ]);
    }

    public function test_contact_message_can_be_created(): void
    {
        $payload = [
            'name' => 'Utilisateur Test',
            'email' => 'TEST@example.com',
            'subject' => 'Demande de collaboration',
            'message' => 'Bonjour, voici un message suffisamment long pour le test.',
        ];

        $this->postJson('/api/contact-messages', $payload)
            ->assertCreated()
            ->assertJsonPath('success', true)
            ->assertJsonStructure([
                'success',
                'message',
                'data' => ['id', 'created_at'],
            ]);

        $this->assertDatabaseHas('contact_messages', [
            'name' => 'Utilisateur Test',
            'email' => 'test@example.com',
            'subject' => 'Demande de collaboration',
        ]);

        $this->assertSame(1, ContactMessage::query()->count());
    }

    public function test_contact_message_is_validated(): void
    {
        $this->postJson('/api/contact-messages', [
            'name' => '',
            'email' => 'email-invalide',
            'subject' => '',
            'message' => 'court',
        ])
            ->assertUnprocessable()
            ->assertJsonValidationErrors(['name', 'email', 'subject', 'message']);
    }
}
