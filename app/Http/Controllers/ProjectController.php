<?php

namespace App\Http\Controllers;

use App\Data\ProjectData;
use App\Data\ProjectRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function show(string $project){

        $project = ProjectRepository::find($project);

        if (!$project) {
            abort(404, 'Project not found');
        }

        return Inertia::render('Project/Show', [
            'project' => $project,

        ]);
    }
}
