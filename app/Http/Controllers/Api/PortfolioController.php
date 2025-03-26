<?php



namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

class PortfolioController extends Controller
{
    public function index()
    {
        return response()->json([
            'projects' => [
                ['name' => 'Project 1', 'description' => 'Details of Project 1'],
                ['name' => 'Project 2', 'description' => 'Details of Project 2'],
            ]
        ]);
    }
}
