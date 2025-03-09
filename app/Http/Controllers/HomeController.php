<?php

namespace App\Http\Controllers;
use App\Data\ProjectRepository;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use App\Data\ProjectData;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index(){

        $fontSize = 7;

        $projects = ProjectRepository::all();

        /*$projects = collect([
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
                'size' => $fontSize
            ],
            [
                'title' => "HARRY POTTER: QUIDDITCH CHAMPIONS",
                'size' => $fontSize
            ],
            [
                'title' => "MULTIVERSUS",
                'size' => $fontSize
            ],
            [
                'title' => "GOTHAM KNIGHTS",
                'size' => $fontSize
            ],
            [
                'title' => "GAME OF THRONES: CONQUEST",
                'size' => $fontSize ],
            [
                'title' => "MARVEL: STRIKE FORCE", 'size' => $fontSize
            ],
            [
                'title' => "LEAGUE OF LEGENDS: RIOT KING",
                'size' => $fontSize
            ],
            [
                'title' => "LEAGUE OF LEGENDS: CONVERGENCE",
                'size' => $fontSize
            ],
        ]);*/

        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'projects' => $projects,
            'projectGridFile' => Storage::url('project-grid.png'),
            'projectGridFile2' => Storage::url('project-grid2.png')
        ]);
    }
}
