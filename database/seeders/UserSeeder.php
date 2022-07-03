<?php

namespace Database\Seeders;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    const Guard = 'sanctum';
    use WithoutModelEvents;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $password = 'qwerty';

        if (! User::where('email', 'konst.cos@gmail.com')->first()) {
            User::create([
                'name' => 'Konstantin',
                'email' => 'konst.cos@gmail.com',
                'email_verified_at' => Carbon::now(),
                'password' => \Hash::make($password),
            ]);
        }

    }
}
