<?php

namespace App\Data;

use App\Enums\Classification;
use App\Enums\Contributions;
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
            'classification' => 'entertainment',
            'slug' => 'suicide-squad-kill-the-justice-league',
            'title' => 'SUICIDE SQUAD: KILL THE JUSTICE LEAGUE',
            'client' => 'WB Games',
            'description' => '<em>Suicide Squad: Kill the Justice League</em> is an open-world, third-person action shooter by Rocksteady Studios. Set in Metropolis, it follows Harley Quinn, Deadshot, Captain Boomerang, and King Shark as they battle a mind-controlled Justice League. Featuring fast-paced combat, unique traversal, and cooperative multiplayer, it blends Rocksteady’s storytelling with chaotic supervillain action.',
            'keyart' => 'projects/ss.jpg',
            'keyartMobile' => 'projects/ss-m.jpg',
            'keyartLocation' => 'left',
            'contributions' => [
                Contributions::DEVOPS,
                Contributions::FRONTEND,
                Contributions::BACKEND,
            ],
            'hasLogo' => true,
            'hasBg' => true,
        ],
        [
            'classification' => 'entertainment',
            'slug' => 'mortal-kombat-1',
            'title' => 'MORTAL KOMBAT 1',
            'client' => 'WB Games',
            'description' => '<em>Mortal Kombat 1</em> is a fighting game that reboots the franchise with a new timeline, crafted by Fire God Liu Kang. It features brutal combat, cinematic story mode, and the Kameo Fighter system, allowing for assist-based attacks. With updated mechanics and classic fatalities, it delivers a fresh yet familiar experience for fans.',
            'keyart' => 'projects/mk1.jpg',
            'keyartMobile' => 'projects/mk1-m.jpg',
            'keyartLocation' => 'right',
            'contributions' => [

            ],
            'hasLogo' => true,
            'hasBg' => true,
        ],
        [
            'classification' => 'entertainment',
            'slug' => 'harry-potter-hogwarts-legacy',
            'title' => 'HARRY POTTER: HOGWARTS LEGACY',
            'client' => 'WB Games',
            'description' => '<em>Hogwarts Legacy</em> is an open-world action RPG set in the 1800s Wizarding World. Players create their own witch or wizard, explore Hogwarts and beyond, learn magic, and uncover hidden secrets. With spellcasting combat, potion-making, and creature taming, it offers an immersive Hogwarts experience.',
            'keyart' => 'projects/hl.jpg',
            'keyartMobile' => 'projects/hl-m.jpg',
            'keyartLocation' => 'left',
            'contributions' => [

            ],
            'hasLogo' => true,
            'hasBg' => true,
        ],
        [
            'classification' => 'entertainment',
            'slug' => 'harry-potter-quidditch-champions',
            'title' => 'HARRY POTTER: QUIDDITCH CHAMPIONS',
            'client' => 'WB Games',
            'description' => '<em>Harry Potter: Quidditch Champions</em> is a competitive sports game centered on the fast-paced wizarding sport of Quidditch. Players take on roles like Chasers, Beaters, Keepers, and Seekers, competing in high-flying matches solo or online. With dynamic broomstick gameplay and iconic locations, it brings the magic of Quidditch to life.',
            'keyart' => 'projects/qc.jpg',
            'keyartMobile' => 'projects/qc-m.jpg',
            'keyartLocation' => 'bottom',
            'contributions' => [

            ],
            'hasLogo' => true,
            'hasBg' => true,
        ],
        [
            'classification' => 'entertainment',
            'slug' => 'multiversus',
            'title' => 'MULTIVERSUS',
            'client' => 'WB Games',
            'description' => '<em>MultiVersus</em>is a platform fighting game featuring characters from Warner Bros. franchises. With 2v2-focused combat, unique character abilities, and cross-platform play, it offers a fresh take on the genre. Iconic fighters like Batman, Shaggy, and Bugs Bunny battle in dynamic, interactive arenas.',
            'contributions' => [

            ],
            'keyart' => 'projects/mvs.jpg',
            'keyartMobile' => 'projects/mvs-m.jpg',
            'keyartLocation' => 'top',
        ],
        [
            'classification' => 'entertainment',
            'slug' => 'gotham-knights',
            'title' => 'GOTHAM KNIGHTS',
            'client' => 'WB Games',
            'description' => '',
            'contributions' => [

            ],
            'keyart' => 'projects/gk.jpg',
            'keyartMobile' => 'projects/gk-m.jpg',
            'keyartLocation' => 'bottom',
        ],
        [
            'classification' => 'entertainment',
            'slug' => 'game-of-thrones-conquest',
            'title' => 'GAME OF THRONES: CONQUEST',
            'client' => 'WB Games',
            'description' => '',
            'contributions' => [

            ],
            'keyart' => 'projects/got.jpg',
            'keyartMobile' => 'projects/got-m.jpg',
            'keyartLocation' => 'top',
        ],
        [
            'classification' => 'entertainment',
            'slug' => 'marvel-strike-force',
            'title' => 'MARVEL: STRIKE FORCE',
            'client' => 'Scopely',
            'description' => '',
            'contributions' => [

            ],
            'keyart' => 'projects/msf.jpg',
            'keyartMobile' => 'projects/msf-m.jpg',
            'keyartLocation' => 'bottom',
        ],
        [
            'classification' => 'entertainment',
            'slug' => 'league-of-legends-riot-king',
            'title' => 'LEAGUE OF LEGENDS: RIOT KING',
            'client' => 'Riot Games',
            'description' => '',
            'contributions' => [

            ],
            'keyart' => 'projects/rk.jpg',
            'keyartMobile' => 'projects/rk-m.jpg',
            'keyartLocation' => 'top',
        ],
        [
            'classification' => 'entertainment',
            'slug' => 'league-of-legends-convergence',
            'title' => 'LEAGUE OF LEGENDS: CONVERGENCE',
            'client' => 'Riot Games',
            'description' => '',
            'contributions' => [

            ],
            'keyart' => 'projects/conv.jpg',
            'keyartMobile' => 'projects/conv-m.jpg',
            'keyartLocation' => 'right',
        ],
        [
            'classification' => 'entertainment',
            'slug' => 'pubg',
            'title' => 'PUBG BATTLEGROUNDS',
            'client' => 'PUBG',
            'description' => '',
            'contributions' => [

            ],
            'keyart' => 'projects/pubg.jpg',
            'keyartMobile' => 'projects/pubg-m.jpg',
            'keyartLocation' => 'left',
        ],
        [
            'classification' => 'entertainment',
            'slug' => 'injustice-2',
            'title' => 'INJUSTICE 2',
            'client' => 'WB Games',
            'description' => '',
            'contributions' => [

            ],
            'keyart' => 'projects/inj.jpg',
            'keyartMobile' => 'projects/inj-m.jpg',
            'keyartLocation' => 'right',
        ],
        [
            'classification' => 'entertainment',
            'slug' => 'lego-star-wars',
            'title' => 'LEGO STAR WARS',
            'client' => 'WB Games',
            'description' => '',
            'contributions' => [

            ],
            'keyart' => 'projects/lego-star-wars.jpg',
            'keyartMobile' => 'projects/lego-star-wars-m.jpg',
            'keyartLocation' => 'left',
        ],
        [
            'classification' => 'entertainment',
            'slug' => 'back-4-blood',
            'title' => 'BACK 4 BLOOD',
            'client' => 'WB Games',
            'description' => '',
            'contributions' => [

            ],
            'keyart' => 'projects/back-4-blood.jpg',
            'keyartMobile' => 'projects/back-4-blood-m.jpg',
            'keyartLocation' => 'right',
        ],
        [
            'classification' => 'entertainment',
            'slug' => 'hitman-2',
            'title' => 'HITMAN 2',
            'client' => 'WB Games',
            'description' => '',
            'contributions' => [

            ],
            'keyart' => 'projects/hitman-2.jpg',
            'keyartMobile' => 'projects/hitman-2-m.jpg',
            'keyartLocation' => 'left',
        ],
        [
            'classification' => 'entertainment',
            'slug' => 'shadow-of-war',
            'title' => 'MIDDLE EARTH: SHADOW OF WAR',
            'client' => 'WB Games',
            'description' => '',
            'contributions' => [

            ],
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
            //ray('doing ' . $project['slug']);

            // Normalize contributions to an array
            $contributions = isset($project['contributions']) && is_array($project['contributions'])
                ? $project['contributions']
                : [];

            //ray($contributions); // Log the normalized array

            return ProjectData::from([
                'slug' => $project['slug'],
                'classification' => Classification::from($project['classification']),
                'contributions' => $contributions, // Pass array directly
                'title' => $project['title'],
                'client' => $project['client'],
                'description' => $project['description'],
                'size' => self::$fontSize,
                'keyart' => isset($project['keyart']) ? Storage::url($project['keyart']) : null,
                'keyartMobile' => isset($project['keyartMobile']) ? Storage::url($project['keyartMobile']) : null,
                'keyartLocation' => $project['keyartLocation'] ?? null,
                'hasLogo' => $project['hasLogo'] ?? false,
                'hasBg' => $project['hasBg'] ?? false,
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
