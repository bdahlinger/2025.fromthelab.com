<?php

namespace App\Data;

use Illuminate\Support\Facades\Storage;
use Spatie\LaravelData\DataCollection;

class ProjectRepository
{
    protected static float $fontSize = 6.0;

    // projects to add:
    /*
     * Invocure's provider site
     * Larry's record label shopify site
     * Jade Complexions
     * Paws Up
     * the greeno
     * St. James
     * Public Sq.
     *
     * [Entertainment]
     * Mortal Kombat 11
     * HP Magic Awakened
     * Rumbleverse
     * Stray
     * Pysconauts 2
     * Crystal Dynamics
     */

    protected static array $projects = [
        [
            'slug' => 'suicide-squad-kill-the-justice-league',
            'title' => 'SUICIDE SQUAD: KILL THE JUSTICE LEAGUE',
            'keyart' => 'projects/ss.jpg',
            'keyartMobile' => 'projects/ss-m.jpg',
            'keyartLocation' => 'left',
        ],
        [
            'slug' => 'mortal-kombat-1',
            'title' => 'MORTAL KOMBAT 1',
            'keyart' => 'projects/mk1.jpg',
            'keyartMobile' => 'projects/mk1-m.jpg',
            'keyartLocation' => 'right',
        ],
        [
            'slug' => 'harry-potter-hogwarts-legacy',
            'title' => 'HARRY POTTER: HOGWARTS LEGACY',
            'keyart' => 'projects/hl.jpg',
            'keyartMobile' => 'projects/hl-m.jpg',
            'keyartLocation' => 'left',
        ],
        [
            'slug' => 'harry-potter-quidditch-champions',
            'title' => 'HARRY POTTER: QUIDDITCH CHAMPIONS',
            'keyart' => 'projects/qc.jpg',
            'keyartMobile' => 'projects/qc-m.jpg',
            'keyartLocation' => 'bottom',
        ],
        [
            'slug' => 'multiversus',
            'title' => 'MULTIVERSUS',
            'keyart' => 'projects/mvs.jpg',
            'keyartMobile' => 'projects/mvs-m.jpg',
            'keyartLocation' => 'top',
        ],
        [
            'slug' => 'gotham-knights',
            'title' => 'GOTHAM KNIGHTS',
            'keyart' => 'projects/gk.jpg',
            'keyartMobile' => 'projects/gk-m.jpg',
            'keyartLocation' => 'bottom',
        ],
        [
            'slug' => 'game-of-thrones-conquest',
            'title' => 'GAME OF THRONES: CONQUEST',
            'keyart' => 'projects/got.jpg',
            'keyartMobile' => 'projects/got-m.jpg',
            'keyartLocation' => 'top',
        ],
        [
            'slug' => 'marvel-strike-force',
            'title' => 'MARVEL: STRIKE FORCE',
            'keyart' => 'projects/msf.jpg',
            'keyartMobile' => 'projects/msf-m.jpg',
            'keyartLocation' => 'bottom',
        ],
        [
            'slug' => 'league-of-legends-riot-king',
            'title' => 'LEAGUE OF LEGENDS: RIOT KING',
            'keyart' => 'projects/rk.jpg',
            'keyartMobile' => 'projects/rk-m.jpg',
            'keyartLocation' => 'top',
        ],
        [
            'slug' => 'league-of-legends-convergence',
            'title' => 'LEAGUE OF LEGENDS: CONVERGENCE',
            'keyart' => 'projects/conv.jpg',
            'keyartMobile' => 'projects/conv-m.jpg',
            'keyartLocation' => 'right',
        ],
        [
            'slug' => 'pubg',
            'title' => 'PUBG BATTLEGROUNDS',
            'keyart' => 'projects/pubg.jpg',
            'keyartMobile' => 'projects/pubg-m.jpg',
            'keyartLocation' => 'left',
        ],
        [
            'slug' => 'injustice-2',
            'title' => 'INJUSTICE 2',
            'keyart' => 'projects/inj.jpg',
            'keyartMobile' => 'projects/inj-m.jpg',
            'keyartLocation' => 'right',
        ],
        [
            'slug' => 'lego-star-wars',
            'title' => 'LEGO STAR WARS',
            'keyart' => 'projects/lego-star-wars.jpg',
            'keyartMobile' => 'projects/lego-star-wars-m.jpg',
            'keyartLocation' => 'left',
        ],
        [
            'slug' => 'back-4-blood',
            'title' => 'BACK 4 BLOOD',
            'keyart' => 'projects/back-4-blood.jpg',
            'keyartMobile' => 'projects/back-4-blood-m.jpg',
            'keyartLocation' => 'right',
        ],
        [
            'slug' => 'hitman-2',
            'title' => 'HITMAN 2',
            'keyart' => 'projects/hitman-2.jpg',
            'keyartMobile' => 'projects/hitman-2-m.jpg',
            'keyartLocation' => 'left',
        ],
        [
            'slug' => 'shadow-of-war',
            'title' => 'MIDDLE EARTH: SHADOW OF WAR',
            'keyart' => 'projects/shadow-of-war.jpg',
            'keyartMobile' => 'projects/shadow-of-war-m.jpg',
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
                'keyartMobile' => isset($project['keyartMobile']) ? Storage::url($project['keyartMobile']) : null,
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
