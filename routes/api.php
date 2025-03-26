<?php

use App\Http\Controllers\Api\PortfolioController;
use Illuminate\Support\Facades\Route;

Route::get('/portfolio', function() {
    return response()->json([
        'projects' => [
            ['name' => 'Project 1', 'description' => 'Description of Project 1'],
            ['name' => 'Project 2', 'description' => 'Description of Project 2'],
        ]
    ]);
});
Route::get('/portfolio', [PortfolioController::class, 'index']);