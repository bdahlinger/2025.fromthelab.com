<?php

namespace App\Http\Controllers;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index(){

        $projects = collect([
            [
                'title' => "SUICIDE SQUAD: KILL THE JUSTICE LEAGUE",
                'size' => 9,
                'keyart' => Storage::url('projects/ss.jpg')
            ],
            [
                'title' => "MORTAL KOMBAT 1",
                'size' => 9
            ],
            [
                'title' => "HARRY POTTER: HOGWARTS LEGACY",
                'size' => 9
            ],
            [
                'title' => "HARRY POTTER: QUIDDITCH CHAMPIONS",
                'size' => 9
            ],
            [
                'title' => "MULTIVERSUS",
                'size' => 9
            ],
            [
                'title' => "GOTHAM KNIGHTS",
                'size' => 9
            ],
            [
                'title' => "GAME OF THRONES: CONQUEST",
                'size' => 9 ],
            [
                'title' => "MARVEL: STRIKE FORCE", 'size' => 9
            ],
            [
                'title' => "LEAGUE OF LEGENDS: RIOT KING",
                'size' => 9
            ],
            [
                'title' => "LEAGUE OF LEGENDS: CONVERGENCE",
                'size' => 9
            ],
        ]);

        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'projects' => $projects,
        ]);
    }
}
