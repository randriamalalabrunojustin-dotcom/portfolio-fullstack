<?php

use Illuminate\Support\Facades\Artisan;

Artisan::command('portfolio:info', function (): void {
    $this->info('Portfolio API — Laravel 12');
})->purpose('Afficher les informations de l API');
