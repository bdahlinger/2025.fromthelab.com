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

        $projects = ProjectRepository::allProjects();

        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            //'laravelVersion' => Application::VERSION,
            //'phpVersion' => PHP_VERSION,
            'projects' => $projects,
            'projectGridFile' => Storage::url('project-grid.png'),
            'projectGridFile2' => Storage::url('project-grid2.png'),
            'archived' => ProjectRepository::allArchived()
        ]);
    }
}
