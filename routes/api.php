<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::match(['post', 'option'], '/login', [AuthController::class, 'login'])->name('login');

Route::middleware('auth:sanctum')
    ->match(['post', 'option'],'/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->group(function() {
    Route::match(['post', 'option'], '/user', [AuthController::class, 'user'])->name('user');
    Route::match(['post', 'option'], '/logout', [AuthController::class, 'logout'])->name('logout');
    Route::match(['post', 'option'], '/password/change', [AuthController::class, 'changePassword'])->name('changePassword');
});
