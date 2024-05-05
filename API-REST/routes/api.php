<?php

use App\Http\Controllers\ActiviteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\CategorieController;

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

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/register', [RegisteredUserController::class, 'store']);

Route::post('/login', [AuthenticatedSessionController::class, 'store']);

Route::apiResource('/Activites',ActiviteController::class);
Route::apiResource('/categorie',CategorieController::class);
Route::get('/csrf-token', function () {
    $token = csrf_token();
    return response()->json(['token' => $token]);
});
// Example route definition
Route::get('/Activities/{category}', [ActiviteController::class, 'getActivitiesByCategory']);

