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

        $currentIndex = $projects->search(fn($p) => $p->slug === $project->slug);

        $totalProjects = $projects->count();
        $prevIndex = $currentIndex === 0 ? $totalProjects - 1 : $currentIndex - 1;
        $nextIndex = $currentIndex === $totalProjects - 1 ? 0 : $currentIndex + 1;

        $previousProject = $projects[$prevIndex] ?? null;
        $nextProject = $projects[$nextIndex] ?? null;

        return Inertia::render('Project/Show', [
            'project' => $project,
            'projects' => $projects,
            'projectGridFile' => Storage::url('project-grid.png'),
            'projectGridFile2' => Storage::url('project-grid2.png'),
            'fromHome' => request()->header('referer') === url('/') || request()->routeIs('home'),
            'previousProject' => $previousProject,
            'nextProject' => $nextProject,
        ]);
    }
}
