<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::create([
            'name' => 'James Allen',
            'email' => 'james@shinyrobot.io',
            'password' => Hash::make('billisthebestever,believeme'),
            'email_verified_at' => now(),
        ]);
    }
}
