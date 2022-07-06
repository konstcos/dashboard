<?php

namespace App\Models;

use App\Exceptions\AuthException;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Проверка пароля
     *
     * @param string $userPassword
     *
     * @return bool
     */
    public function checkPassword(string $userPassword): bool
    {
        return Hash::check($userPassword, $this->password);
    }

    /**
     * @param string $newPassword
     *
     * @throws AuthException
     */
    public function updatePassword(string $newPassword): void
    {
        $this->assertPassword($newPassword);
        $this->update(['password' => Hash::make($newPassword)]);
    }

    /**
     * @param string $newPassword
     *
     * @throws AuthException
     */
    private function assertPassword(string $newPassword): void
    {
        if ($this->comparePassword($newPassword)) {
            throw AuthException::passwordsIdenticalException();
        }
    }

    public function comparePassword(string $password): bool
    {
        return Hash::check($password, $this->password);
    }
}
