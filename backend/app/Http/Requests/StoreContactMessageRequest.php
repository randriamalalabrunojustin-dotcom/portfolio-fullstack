<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreContactMessageRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    protected function prepareForValidation(): void
    {
        $this->merge([
            'name' => trim((string) $this->input('name')),
            'email' => mb_strtolower(trim((string) $this->input('email'))),
            'subject' => trim((string) $this->input('subject')),
            'message' => trim((string) $this->input('message')),
        ]);
    }

    /**
     * @return array<string, array<int, string>>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'min:2', 'max:100'],
            'email' => ['required', 'string', 'email:rfc', 'max:150'],
            'subject' => ['required', 'string', 'min:3', 'max:150'],
            'message' => ['required', 'string', 'min:10', 'max:5000'],
        ];
    }

    /**
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'name.required' => 'Le nom est obligatoire.',
            'name.min' => 'Le nom doit contenir au moins deux caractères.',
            'name.max' => 'Le nom ne doit pas dépasser 100 caractères.',
            'email.required' => 'L’adresse email est obligatoire.',
            'email.email' => 'L’adresse email n’est pas valide.',
            'email.max' => 'L’adresse email ne doit pas dépasser 150 caractères.',
            'subject.required' => 'Le sujet est obligatoire.',
            'subject.min' => 'Le sujet doit contenir au moins trois caractères.',
            'subject.max' => 'Le sujet ne doit pas dépasser 150 caractères.',
            'message.required' => 'Le message est obligatoire.',
            'message.min' => 'Le message doit contenir au moins dix caractères.',
            'message.max' => 'Le message ne doit pas dépasser 5 000 caractères.',
        ];
    }
}
