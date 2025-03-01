<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

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
            'password' => Hash::majke('billisthebestever,believeme'),
            'email_verified_at' => now(),
        ]);
    }
}
