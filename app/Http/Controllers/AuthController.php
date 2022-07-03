<?php


namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;


class AuthController extends Controller
{

    /**
     * Авторизация пользователя
     *
     * @param LoginRequest $request
     *
     * @return JsonResponse
     */
    public function login(LoginRequest $request): JsonResponse
    {
        $credentials = $request->only('email', 'password');

        $user = User::where('email', $credentials['email'])->first();

        if (! $user || ! $user->checkPassword($credentials['password'])) {
            return response()->json([
                'status' => 'fail',
                'message' => 'Invalid login data',
            ]);
        }

        $token = $user->createToken('auth_token', [])->plainTextToken;

        return response()->json([
            'status' => 'success',
            'token' => $token,
            'tokenType' => 'Bearer'
        ]);
    }

    public function user(Request $request): JsonResponse
    {
        $user = $request->user();
        return response()->json([
            'status' => 'success',
            'user' => $user,
        ]);
    }

    public function logout(Request $request): JsonResponse
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json([
            'status' => 'success',
            'slug' => 'token_delete',
        ]);
    }

}
