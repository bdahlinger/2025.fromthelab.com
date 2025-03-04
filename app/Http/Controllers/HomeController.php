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

        $fontSize = 7;

        $projects = collect([
            [
                'title' => "SUICIDE SQUAD: KILL THE JUSTICE LEAGUE",
                'size' => $fontSize,
                'keyart' => Storage::url('projects/ss.jpg'),
                'keyartLocation' => 'left'
            ],
            [
                'title' => "MORTAL KOMBAT 1",
                'size' => $fontSize,
                'keyart' => Storage::url('projects/mk1.jpg'),
                'keyartLocation' => 'right'
            ],
            [
                'title' => "HARRY POTTER: HOGWARTS LEGACY",
                'size' => 8
            ],
            [
                'title' => "HARRY POTTER: QUIDDITCH CHAMPIONS",
                'size' => 8
            ],
            [
                'title' => "MULTIVERSUS",
                'size' => 8
            ],
            [
                'title' => "GOTHAM KNIGHTS",
                'size' => 8
            ],
            [
                'title' => "GAME OF THRONES: CONQUEST",
                'size' => 8 ],
            [
                'title' => "MARVEL: STRIKE FORCE", 'size' => 9
            ],
            [
                'title' => "LEAGUE OF LEGENDS: RIOT KING",
                'size' => 8
            ],
            [
                'title' => "LEAGUE OF LEGENDS: CONVERGENCE",
                'size' => 8
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
