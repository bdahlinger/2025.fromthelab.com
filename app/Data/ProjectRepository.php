<?php

namespace App\Data;

use Illuminate\Support\Facades\Storage;
use Spatie\LaravelData\DataCollection;

class ProjectRepository
{
    protected static float $fontSize = 6.0;

    protected static array $projects = [
        [
            'slug' => 'suicide-squad-kill-the-justice-league',
            'title' => 'SUICIDE SQUAD: KILL THE JUSTICE LEAGUE',
            'keyart' => 'projects/ss.jpg',
            'keyartLocation' => 'left',
        ],
        [
            'slug' => 'mortal-kombat-1',
            'title' => 'MORTAL KOMBAT 1',
            'keyart' => 'projects/mk1.jpg',
            'keyartLocation' => 'right',
        ],
        [
            'slug' => 'harry-potter-hogwarts-legacy',
            'title' => 'HARRY POTTER: HOGWARTS LEGACY',
            'keyart' => 'projects/hl.jpg',
            'keyartLocation' => 'left',
        ],
        [
            'slug' => 'harry-potter-quidditch-champions',
            'title' => 'HARRY POTTER: QUIDDITCH CHAMPIONS',
            'keyart' => 'projects/qc.jpg',
            'keyartLocation' => 'bottom',
        ],
        [
            'slug' => 'multiversus',
            'title' => 'MULTIVERSUS',
            'keyart' => 'projects/mvs.jpg',
            'keyartLocation' => 'top',
        ],
        [
            'slug' => 'gotham-knights',
            'title' => 'GOTHAM KNIGHTS',
            'keyart' => 'projects/gk.jpg',
            'keyartLocation' => 'bottom',
        ],
        [
            'slug' => 'game-of-thrones-conquest',
            'title' => 'GAME OF THRONES: CONQUEST',
            'keyart' => 'projects/got.jpg',
            'keyartLocation' => 'top',
        ],
        [
            'slug' => 'marvel-strike-force',
            'title' => 'MARVEL: STRIKE FORCE',
            'keyart' => 'projects/msf.jpg',
            'keyartLocation' => 'bottom',
        ],
        [
            'slug' => 'league-of-legends-riot-king',
            'title' => 'LEAGUE OF LEGENDS: RIOT KING',
            'keyart' => 'projects/rk.jpg',
            'keyartLocation' => 'top',
        ],
        [
            'slug' => 'league-of-legends-convergence',
            'title' => 'LEAGUE OF LEGENDS: CONVERGENCE',
            'keyart' => 'projects/conv.jpg',
            'keyartLocation' => 'bottom',
        ],
        [
            'slug' => 'pubg',
            'title' => 'PUBG BATTLEGROUNDS',
            'keyart' => 'projects/pubg.jpg',
            'keyartLocation' => 'bottom',
        ],
    ];

    /**
     * Get all projects as a DataCollection.
     */
    public static function all()
    {
        $projects = collect(self::$projects)->map(function (array $project) {
            return ProjectData::from([
                'slug' => $project['slug'],
                'title' => $project['title'],
                'size' => self::$fontSize,
                'keyart' => isset($project['keyart']) ? Storage::url($project['keyart']) : null,
                'keyartLocation' => $project['keyartLocation'] ?? null,
            ]);
        });

        return $projects;
    }

    /**
     * Find a project by slug.
     */
    public static function find(string $slug): ?ProjectData
    {
        return self::all()->first(fn (ProjectData $project) => $project->slug === $slug);
    }
}
