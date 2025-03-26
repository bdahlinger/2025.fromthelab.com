<?php

namespace App\Data;

use App\Enums\Classification;
use App\Enums\Contributions;
use App\Enums\Segments;
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
            'classification' => 'Entertainment',
            'slug' => 'suicide-squad-kill-the-justice-league',
            'title' => 'SUICIDE SQUAD: KILL THE JUSTICE LEAGUE',
            'client' => 'Warner Bros. Games',
            'description' => 'We designed and developed the official <em>Suicide Squad: Kill the Justice League</em> website using Laravel and VueJS. One of the highlights was implementing a custom Twitch Drops feature, allowing players to earn in-game rewards by watching streams. Another feature we are happy with is our headless WordPress setup using the awesome Roots Bedrock and Sage libraries that utilize modern Laravel integrations alongside Corcel, a Laravel 3rd party library that maps WordPress database entries to Laravel models. We set up the Laravel backend and handled deployment using AWS CloudFormation templates.',
            'keyart' => 'projects/ss.jpg',
            'keyartMobile' => 'projects/ss-m.jpg',
            'keyartLocation' => 'left',
            'contributions' => [
                Contributions::DEVOPS,
                Contributions::FRONTEND,
                Contributions::BACKEND,
                Contributions::UX,
                Contributions::DESIGN,
            ],
            'segments' => [
                Segments::AWS,
                Segments::LARAVEL,
                Segments::SCSS,
                Segments::VUE_JS,
                Segments::GSAP,
                Segments::HEADLESS_WORDPRESS,
                Segments::ROOTS_BEDROCK,
                Segments::ROOTS_SAGE,
            ],
            'hasLogo' => true,
            'hasBg' => true,
        ],
        [
            'classification' => 'Entertainment',
            'slug' => 'mortal-kombat-1',
            'title' => 'MORTAL KOMBAT 1',
            'client' => 'Warner Bros. Games',
            'description' => '<em>Mortal Kombat 1</em> is a fighting game that reboots the franchise with a new timeline, crafted by Fire God Liu Kang. It features brutal combat, cinematic story mode, and the Kameo Fighter system, allowing for assist-based attacks. With updated mechanics and classic fatalities, it delivers a fresh yet familiar experience for fans.',
            'keyart' => 'projects/mk1.jpg',
            'keyartMobile' => 'projects/mk1-m.jpg',
            'keyartLocation' => 'right',
            'contributions' => [
                Contributions::DEVOPS,
                Contributions::FRONTEND,
                Contributions::BACKEND,
                Contributions::UX,
                Contributions::DESIGN,
            ],
            'segments' => [
                Segments::AWS,
                Segments::LARAVEL,
                Segments::SCSS,
                Segments::VUE_JS,
                Segments::GSAP,
            ],
            'hasLogo' => true,
            'hasBg' => true,
        ],
        [
            'classification' => 'Entertainment',
            'slug' => 'harry-potter-hogwarts-legacy',
            'title' => 'HARRY POTTER: HOGWARTS LEGACY',
            'client' => 'Warner Bros. Games',
            'description' => '<em>Hogwarts Legacy</em> is an open-world action RPG set in the 1800s Wizarding World. Players create their own witch or wizard, explore Hogwarts and beyond, learn magic, and uncover hidden secrets. With spellcasting combat, potion-making, and creature taming, it offers an immersive Hogwarts experience.',
            'keyart' => 'projects/hl.jpg',
            'keyartMobile' => 'projects/hl-m.jpg',
            'keyartLocation' => 'left',
            'contributions' => [
                Contributions::DEVOPS,
                Contributions::FRONTEND,
                Contributions::BACKEND,
                Contributions::UX,
                Contributions::DESIGN,
            ],
            'segments' => [
                Segments::AWS,
                Segments::LARAVEL,
                Segments::SCSS,
                Segments::VUE_JS,
                Segments::GSAP,
            ],
            'hasLogo' => true,
            'hasBg' => true,
        ],
        [
            'classification' => 'Entertainment',
            'slug' => 'harry-potter-quidditch-champions',
            'title' => 'HARRY POTTER: QUIDDITCH CHAMPIONS',
            'client' => 'Warner Bros. Games',
            'description' => '<em>Harry Potter: Quidditch Champions</em> is a competitive sports game centered on the fast-paced wizarding sport of Quidditch. Players take on roles like Chasers, Beaters, Keepers, and Seekers, competing in high-flying matches solo or online. With dynamic broomstick gameplay and iconic locations, it brings the magic of Quidditch to life.',
            'keyart' => 'projects/qc.jpg',
            'keyartMobile' => 'projects/qc-m.jpg',
            'keyartLocation' => 'bottom',
            'contributions' => [
                Contributions::DEVOPS,
                Contributions::FRONTEND,
                Contributions::BACKEND,
                Contributions::UX,
                Contributions::DESIGN,
            ],
            'segments' => [
                Segments::AWS,
                Segments::LARAVEL,
                Segments::SCSS,
                Segments::VUE_JS,
            ],
            'hasLogo' => true,
            'hasBg' => true,
        ],
        [
            'classification' => 'Entertainment',
            'slug' => 'multiversus',
            'title' => 'MULTIVERSUS',
            'client' => 'Warner Bros. Games',
            'description' => '<em>MultiVersus</em>is a platform fighting game featuring characters from Warner Bros. franchises. With 2v2-focused combat, unique character abilities, and cross-platform play, it offers a fresh take on the genre. Iconic fighters like Batman, Shaggy, and Bugs Bunny battle in dynamic, interactive arenas.',
            'contributions' => [
                Contributions::DEVOPS,
                Contributions::FRONTEND,
                Contributions::BACKEND,
                Contributions::UX,
                Contributions::DESIGN,
            ],
            'segments' => [
                Segments::AWS,
                Segments::LARAVEL,
                Segments::SCSS,
                Segments::VUE_JS,
                Segments::HEADLESS_WORDPRESS,
                Segments::ROOTS_BEDROCK,
                Segments::ROOTS_SAGE,
            ],
            'keyart' => 'projects/mvs.jpg',
            'keyartMobile' => 'projects/mvs-m.jpg',
            'keyartLocation' => 'top',
        ],
        [
            'classification' => 'Entertainment',
            'slug' => 'gotham-knights',
            'title' => 'GOTHAM KNIGHTS',
            'client' => 'Warner Bros. Games',
            'description' => '',
            'contributions' => [
                Contributions::DEVOPS,
                Contributions::FRONTEND,
                Contributions::BACKEND,
                Contributions::UX,
                Contributions::DESIGN,
            ],
            'segments' => [
                Segments::AWS,
                Segments::LARAVEL,
                Segments::SCSS,
                Segments::VUE_JS,
                Segments::WEBGL,
            ],
            'keyart' => 'projects/gk.jpg',
            'keyartMobile' => 'projects/gk-m.jpg',
            'keyartLocation' => 'bottom',
        ],
        [
            'classification' => 'Entertainment',
            'slug' => 'game-of-thrones-conquest',
            'title' => 'GAME OF THRONES: CONQUEST',
            'client' => 'Warner Bros. Games',
            'description' => '',
            'contributions' => [
                Contributions::DEVOPS,
                Contributions::FRONTEND,
                Contributions::BACKEND,
                Contributions::UX,
                Contributions::DESIGN,
            ],
            'segments' => [
                Segments::AWS,
                Segments::WORDPRESS,
                Segments::ROOTS_BEDROCK,
                Segments::ROOTS_SAGE,
                Segments::SCSS,
                Segments::VUE_JS,
            ],
            'keyart' => 'projects/got.jpg',
            'keyartMobile' => 'projects/got-m.jpg',
            'keyartLocation' => 'top',
        ],
        [
            'classification' => 'Entertainment',
            'slug' => 'marvel-strike-force',
            'title' => 'MARVEL: STRIKE FORCE',
            'client' => 'Scopely',
            'description' => '',
            'contributions' => [
                Contributions::DEVOPS,
                Contributions::FRONTEND,
                Contributions::BACKEND,
                Contributions::DESIGN,
            ],
            'segments' => [
                Segments::AWS,
                Segments::LARAVEL,
                Segments::VUE_JS,
                Segments::SCSS,
                Segments::TWILL,
            ],
            'keyart' => 'projects/msf.jpg',
            'keyartMobile' => 'projects/msf-m.jpg',
            'keyartLocation' => 'bottom',
        ],
        [
            'classification' => 'Entertainment',
            'slug' => 'league-of-legends-riot-king',
            'title' => 'LEAGUE OF LEGENDS: RIOT KING',
            'client' => 'Riot Games',
            'description' => '',
            'contributions' => [
                Contributions::FRONTEND,
                Contributions::BACKEND,
                Contributions::UX,
                Contributions::DESIGN,
            ],
            'segments' => [
                Segments::AWS,
                Segments::VUE_JS,
                Segments::SCSS,
                Segments::STATIC,
            ],
            'keyart' => 'projects/rk.jpg',
            'keyartMobile' => 'projects/rk-m.jpg',
            'keyartLocation' => 'top',
        ],
        [
            'classification' => 'Entertainment',
            'slug' => 'league-of-legends-convergence',
            'title' => 'LEAGUE OF LEGENDS: CONVERGENCE',
            'client' => 'Riot Games',
            'description' => '',
            'contributions' => [
                Contributions::FRONTEND,
                Contributions::BACKEND,
                Contributions::UX,
                Contributions::DESIGN,
            ],
            'segments' => [
                Segments::AWS,
                Segments::VUE_JS,
                Segments::SCSS,
                Segments::STATIC,
            ],
            'keyart' => 'projects/conv.jpg',
            'keyartMobile' => 'projects/conv-m.jpg',
            'keyartLocation' => 'right',
        ],
        [
            'classification' => 'Entertainment',
            'slug' => 'pubg',
            'title' => 'PUBG BATTLEGROUNDS',
            'client' => 'PUBG',
            'description' => '',
            'contributions' => [
                Contributions::DEVOPS,
                Contributions::FRONTEND,
                Contributions::BACKEND,
                Contributions::UX,
                Contributions::DESIGN,
            ],
            'segments' => [
                Segments::AWS,
                Segments::LARAVEL,
                Segments::HEADLESS_WORDPRESS,
                Segments::ROOTS_BEDROCK,
                Segments::ROOTS_SAGE,
                Segments::VUE_JS,
                Segments::SCSS,
            ],
            'keyart' => 'projects/pubg.jpg',
            'keyartMobile' => 'projects/pubg-m.jpg',
            'keyartLocation' => 'left',
        ],
        [
            'classification' => 'Entertainment',
            'slug' => 'injustice-2',
            'title' => 'INJUSTICE 2',
            'client' => 'Warner Bros. Games',
            'description' => '',
            'contributions' => [
                Contributions::DEVOPS,
                Contributions::FRONTEND,
                Contributions::BACKEND,
                Contributions::UX,
                Contributions::DESIGN,
            ],
            'segments' => [
                Segments::LARAVEL,
                Segments::AWS,
                Segments::VUE_JS,
                Segments::SCSS,
            ],
            'keyart' => 'projects/inj.jpg',
            'keyartMobile' => 'projects/inj-m.jpg',
            'keyartLocation' => 'right',
        ],
        [
            'classification' => 'Entertainment',
            'slug' => 'lego-star-wars',
            'title' => 'LEGO STAR WARS',
            'client' => 'Warner Bros. Games',
            'description' => '',
            'contributions' => [
                Contributions::DEVOPS,
                Contributions::FRONTEND,
                Contributions::BACKEND,
                Contributions::UX,
                Contributions::DESIGN,
            ],
            'segments' => [
                Segments::LARAVEL,
                Segments::AWS,
                Segments::VUE_JS,
                Segments::SCSS,
            ],
            'keyart' => 'projects/lego-star-wars.jpg',
            'keyartMobile' => 'projects/lego-star-wars-m.jpg',
            'keyartLocation' => 'left',
        ],
        [
            'classification' => 'Entertainment',
            'slug' => 'back-4-blood',
            'title' => 'BACK 4 BLOOD',
            'client' => 'Warner Bros. Games',
            'description' => '',
            'contributions' => [
                Contributions::DEVOPS,
                Contributions::FRONTEND,
                Contributions::BACKEND,
                Contributions::UX,
                Contributions::DESIGN,
            ],
            'segments' => [
                Segments::LARAVEL,
                Segments::HEADLESS_WORDPRESS,
                Segments::ROOTS_BEDROCK,
                Segments::ROOTS_SAGE,
                Segments::AWS,
                Segments::VUE_JS,
                Segments::SCSS,
            ],
            'keyart' => 'projects/back-4-blood.jpg',
            'keyartMobile' => 'projects/back-4-blood-m.jpg',
            'keyartLocation' => 'right',
        ],
        [
            'classification' => 'Entertainment',
            'slug' => 'hitman-2',
            'title' => 'HITMAN 2',
            'client' => 'Warner Bros. Games',
            'description' => '',
            'contributions' => [
                Contributions::DEVOPS,
                Contributions::FRONTEND,
                Contributions::BACKEND,
                Contributions::UX,
                Contributions::DESIGN,
            ],
            'segments' => [
                Segments::LARAVEL,
                Segments::AWS,
                Segments::VUE_JS,
                Segments::SCSS,
            ],
            'keyart' => 'projects/hitman-2.jpg',
            'keyartMobile' => 'projects/hitman-2-m.jpg',
            'keyartLocation' => 'left',
        ],
        [
            'classification' => 'Entertainment',
            'slug' => 'shadow-of-war',
            'title' => 'MIDDLE EARTH: SHADOW OF WAR',
            'client' => 'Warner Bros. Games',
            'description' => '',
            'contributions' => [
                Contributions::DEVOPS,
                Contributions::FRONTEND,
                Contributions::BACKEND,
                Contributions::DESIGN,
            ],
            'segments' => [
                Segments::STATIC,
                Segments::AWS,
                Segments::SCSS,
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

            // Normalize contributions to an array
            $contributions = isset($project['contributions']) && is_array($project['contributions'])
                ? $project['contributions']
                : [];
            $segments = isset($project['segments']) && is_array($project['segments'])
                ? $project['segments']
                : [];

            return ProjectData::from([
                'slug' => $project['slug'],
                'classification' => Classification::from($project['classification']),
                'contributions' => $contributions,
                'segments' => $segments,
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
