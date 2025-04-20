<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/craftwar', [ProductController::class, 'index'])->name('product.index');
Route::get('/craftwar/create', [ProductController::class, 'create'])->name('product.create');
Route::post('/craftwar', [ProductController::class, 'store'])->name('product.store');
Route::get('/craftwar/{product}/edit', [ProductController::class, 'edit'])->name('product.edit');
Route::put('/craftwar/{product}/update', [ProductController::class, 'update'])->name('product.update');
Route::delete('/craftwar/{product}/delete', [ProductController::class, 'delete'])->name('product.delete');