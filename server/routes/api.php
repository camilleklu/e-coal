<?php

use App\Http\Controllers\API\ArticleController;
use App\Http\Controllers\API\TagController;
use App\Http\Controllers\AdminController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
//Route::post('/create-admin', [AuthController::class, 'createAdmin']);

Route::group([
    'middleware' => 'auth:sanctum',
], function () {
    Route::get('/logout', [AuthController::class, 'logout']);

    Route::get('/user', function (Request $request) {
        return $request->user();
    });

});
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/admin', [AdminController::class, 'index'])->middleware('admin');
});



Route::apiResource("articles", ArticleController::class);
Route::get('/articles/{article}/tags', [ArticleController::class, 'getArticlewithTags']);
Route::get('/search', [ArticleController::class, 'search']);
// Route::get('/lead-stories', [ArticleController::class, 'getLeadStories']);



Route::apiResource("tags", TagController::class);
Route::get('/tags/{tag}/articles', [TagController::class, 'getTagsforArticles']);






