<?php


namespace App\Exceptions;

use JetBrains\PhpStorm\Pure;

class AuthException extends \Exception
{

    public const CODE = [
      0 => 'PASSWORD_COMPARE_FAIL',
      1 => 'PASSWORD_IDENTICAL'
    ];

    /**
     * @return AuthException
     */
    #[Pure] public static function passwordsDoNotIdenticalException(): AuthException
    {
        return new self('Old password does not match', 0);
    }

    /**
     * @return AuthException
     */
    public static function passwordsIdenticalException(): AuthException
    {
        return new self('Password identical', 1);
    }


}
