<?php

use App\Http\Controllers\SignUpController;

use Illuminate\Support\Facades\Route;

Route::post('/register', [SignUpController::class, 'register']);
