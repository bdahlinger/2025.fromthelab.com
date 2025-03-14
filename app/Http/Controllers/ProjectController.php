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
        $projects = ProjectRepository::all();

        if (!$project) {
            abort(404, 'Project not found');
        }

        return Inertia::render('Project/Show', [
            'project' => $project,
            'projects' => $projects,
            'projectGridFile' => Storage::url('project-grid.png'),
            'projectGridFile2' => Storage::url('project-grid2.png'),
    ]);
    }
}
