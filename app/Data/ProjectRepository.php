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
            'classification' => Classification::ENTERTAINMENT,
            'slug' => 'suicide-squad-kill-the-justice-league',
            'title' => 'SUICIDE SQUAD: KILL THE JUSTICE LEAGUE',
            'client' => 'Warner Bros. Games',
            'description' => 'We designed and developed the official <em>Suicide Squad: Kill the Justice League</em> website. One of the highlights was implementing a custom Twitch Drops feature, allowing players to earn in-game rewards by watching streams. Another feature we are happy with is our headless WordPress setup using the Roots Bedrock and Sage libraries that utilize modern Laravel integrations alongside Corcel, a Laravel 3rd party library that maps WordPress database entries to Laravel models.',
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
                Segments::LOCALIZED,
            ],
            'hasLogo' => true,
            'hasBg' => true,
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'slug' => 'mortal-kombat-1',
            'title' => 'MORTAL KOMBAT 1',
            'client' => 'Warner Bros. Games',
            'description' => 'For the official <em>Mortal Kombat 1</em> website, we built an experience using Laravel and Vue.js. A key feature was the "Refer a Friend" program, powered in part by the Twillio’s Segment API, which let players generate referral codes to share with friends, rewarding both with in-game items. We also optimized backend performance and ensured smooth deployment using AWS CloudFormation templates.',
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
                Segments::SEGMENT,
                Segments::LOCALIZED,
            ],
            'hasLogo' => true,
            'hasBg' => true,
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'slug' => 'harry-potter-hogwarts-legacy',
            'title' => 'HARRY POTTER: HOGWARTS LEGACY',
            'client' => 'Warner Bros. Games',
            'description' => 'For the official <em>Hogwarts Legacy</em>  website, we crafted an immersive online experience that brought the magic of the game to life. A major highlight was the Twitch Drops program, allowing players to earn exclusive in-game rewards by watching streams. We also developed a code redemption system in partnership with HBO, seamlessly integrating promotional rewards. To support these features, we built a scalable backend and managed deployment with AWS CloudFormation templates.',
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
                Segments::LOCALIZED,
            ],
            'hasLogo' => true,
            'hasBg' => true,
        ],
        [
            'classification' => Classification::ECOMMERCE,
            'slug' => 'jade-complexions',
            'title' => 'JADÉ COMPLEXIONS',
            'client' => 'The Celestial Alchemist',
            'description' => 'For a beauty skincare brand, we designed and developed a custom Shopify eCommerce site with a dynamic frontend powered by VueJS, SCSS, and Vite. The site includes a tailored system to differentiate between regular consumers, professional estheticians, and wholesale buyers, ensuring a personalized shopping experience. We also integrated various Shopify apps and leveraged Klaviyo to manage email and SMS marketing, enhancing customer engagement and retention.',
            'keyart' => 'projects/jade-complexions.jpg',
            'keyartMobile' => 'projects/qc-m.jpg',
            'keyartLocation' => 'bottom',
            'contributions' => [
                Contributions::FRONTEND,
                Contributions::DESIGN,
            ],
            'segments' => [
                Segments::SHOPIFY,
                Segments::SCSS,
                Segments::VUE_JS,
                Segments::KLAVIYO,
            ],
            'hasLogo' => true,
            'hasBg' => true,
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'slug' => 'harry-potter-quidditch-champions',
            'title' => 'HARRY POTTER: QUIDDITCH CHAMPIONS',
            'client' => 'Warner Bros. Games',
            'description' => 'For the official <em>Harry Potter: Quidditch Champions</em> website, we created a clean and user-friendly landing page that highlights the game’s fast-paced action. The site includes a dedicated purchase page where players can select their platform, choose their preferred edition, and view available retailers. Designed for simplicity and ease of use, the site ensures a seamless browsing and buying experience.',
            'keyart' => 'projects/qc.jpg',
            'keyartMobile' => 'projects/qc-m.jpg',
            'keyartLocation' => 'bottom',
            'contributions' => [
                Contributions::DEVOPS,
                Contributions::FRONTEND,
                Contributions::BACKEND,
                Contributions::UX,
                Contributions::DESIGN,
                Segments::LOCALIZED,
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
            'classification' => Classification::ENTERTAINMENT,
            'slug' => 'multiversus',
            'title' => 'MULTIVERSUS',
            'client' => 'Warner Bros. Games',
            'description' => 'For the official <em>MultiVersus</em> website, we built a dynamic platform using WordPress with Roots Bedrock and Sage, seamlessly integrated with Laravel via Corcel. A headless WordPress setup powered the news page, delivering fast and flexible content updates. The site also featured a Twitch Drops program, rewarding players for watching streams, and a Code Redemption service for unlocking exclusive in-game items. With a streamlined backend and intuitive design, the site served as a central hub for the game’s community.',
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
                Segments::LOCALIZED,
            ],
            'keyart' => 'projects/mvs.jpg',
            'keyartMobile' => 'projects/mvs-m.jpg',
            'keyartLocation' => 'top',
            'hasLogo' => true,
            'hasBg' => true,
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'slug' => 'gotham-knights',
            'title' => 'GOTHAM KNIGHTS',
            'client' => 'Warner Bros. Games',
            'description' => 'For the official <em>Gotham Knights</em> website, we crafted a visually rich experience with interactive elements and cinematic flair. A key feature was the code redemption system, allowing players to unlock exclusive in-game content. To enhance immersion, we utilized WebGL canvases for dynamic effects like smoke and incorporated animated SVGs powered by GSAP. The result was an engaging and visually striking platform that captured the game’s dark and atmospheric tone.',
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
                Segments::GSAP,
                Segments::LOCALIZED,
            ],
            'keyart' => 'projects/gk.jpg',
            'keyartMobile' => 'projects/gk-m.jpg',
            'keyartLocation' => 'bottom',
            'hasLogo' => true,
            'hasBg' => true,
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'slug' => 'game-of-thrones-conquest',
            'title' => 'GAME OF THRONES: CONQUEST',
            'client' => 'Warner Bros. Games',
            'description' => 'For the official <em>Game of Thrones: Conquest</em> website, we built a robust and scalable platform using WordPress, enhanced with Roots Bedrock and Sage. This setup allowed for advanced Git-based deployment to AWS Elastic Beanstalk EC2 instances, with content delivery optimized through AWS CloudFront. Designed to support the mobile game’s evolving needs, the site provided a seamless and high-performance experience for players.',
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
            'hasLogo' => true,
            'hasBg' => true,
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'slug' => 'marvel-strike-force',
            'title' => 'MARVEL: STRIKE FORCE',
            'client' => 'Scopely',
            'description' => 'For the official <em>Marvel: Strike Force</em> website, we modernized the platform by migrating it from an outdated framework to the Laravel stack. To streamline content management, we integrated Twill CMS, allowing for easy updates to news and media. The result was a more flexible, scalable, and efficient website that supported the game’s ongoing marketing efforts.',
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
                Segments::LOCALIZED,
            ],
            'keyart' => 'projects/msf.jpg',
            'keyartMobile' => 'projects/msf-m.jpg',
            'keyartLocation' => 'bottom',
            'hasLogo' => true,
            'hasBg' => true,
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'slug' => 'league-of-legends-ruined-king',
            'title' => 'LEAGUE OF LEGENDS: RUINED KING',
            'client' => 'Riot Games',
            'description' => 'For the official <em>League of Legends: Ruined King</em> website, we built a fast and efficient static site using Gridsome, powered by Vue.js. Hosted on AWS S3, the site was designed for performance and scalability. We automated deployment and CDN cache invalidation with Bash scripts using the AWS CLI, ensuring seamless updates and optimal load times.',
            'contributions' => [
                Contributions::FRONTEND,
                Contributions::BACKEND,
                Contributions::UX,
                Contributions::DESIGN,
            ],
            'segments' => [
                Segments::AWS,
                Segments::STATIC,
                Segments::GRIDSOME,
                Segments::VUE_JS,
                Segments::SCSS,
                Segments::LOCALIZED,
            ],
            'keyart' => 'projects/rk.jpg',
            'keyartMobile' => 'projects/rk-m.jpg',
            'keyartLocation' => 'top',
            'hasLogo' => true,
            'hasBg' => true,
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'slug' => 'league-of-legends-convergence',
            'title' => 'LEAGUE OF LEGENDS: CONVERGENCE',
            'client' => 'Riot Games',
            'description' => 'For the official <em>League of Legends: Convergence</em> website, we utilized Gridsome with Vue.js to create a high-performance static site. Hosted on AWS S3, the site was optimized for speed and reliability. To streamline deployment, we wrote custom Bash scripts that leveraged the AWS CLI, ensuring smooth updates and efficient CDN cache invalidation.',
            'contributions' => [
                Contributions::FRONTEND,
                Contributions::BACKEND,
                Contributions::UX,
                Contributions::DESIGN,
            ],
            'segments' => [
                Segments::AWS,
                Segments::STATIC,
                Segments::GRIDSOME,
                Segments::VUE_JS,
                Segments::SCSS,
                Segments::LOCALIZED,
            ],
            'keyart' => 'projects/conv.jpg',
            'keyartMobile' => 'projects/conv-m.jpg',
            'keyartLocation' => 'right',
            'hasLogo' => true,
            'hasBg' => true,
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'slug' => 'pubg',
            'title' => 'PUBG BATTLEGROUNDS',
            'client' => 'PUBG',
            'description' => 'For the <em>PUBG Battlegrounds</em> brand, we created an esports site in Next.js that tracked and displayed player and team rankings. We also created a site that featured a WordPress setup using the Roots Bedrock and Sage libraries. We created another site for PUBG in Laravel that featured seasonal updates for Seasons 1 to 7, showcasing new in-game items, maps, and features for each season. This allowed players to stay engaged and informed throughout the evolving competitive landscape of PUBG Esports.',
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
                Segments::NEXT_JS,
                Segments::VUE_JS,
                Segments::REACT,
                Segments::SCSS,
                Segments::LOCALIZED,
                Segments::WORDPRESS,
                Segments::ROOTS_BEDROCK,
                Segments::ROOTS_SAGE,
            ],
            'keyart' => 'projects/pubg.jpg',
            'keyartMobile' => 'projects/pubg-m.jpg',
            'keyartLocation' => 'left',
            'hasLogo' => true,
            'hasBg' => true,
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'slug' => 'injustice-2',
            'title' => 'INJUSTICE 2',
            'client' => 'Warner Bros. Games',
            'description' => 'For the official <em>Injustice 2</em> website, we designed an interactive platform that included a live Twitter feed powered by Twitter’s API. We also implemented a registration campaign for an upcoming <em>Injustice 2</em> mobile game, utilizing a Salesforce API to capture user data and notify them when the beta was available. Behind the scenes, the site was driven by a custom CMS built in Laravel, which managed content such as characters, media, and purchase options, providing a seamless and dynamic experience for users.',
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
                Segments::LOCALIZED,
                Segments::CUSTOM_CMS,
                Segments::SALESFORCE,
            ],
            'keyart' => 'projects/inj.jpg',
            'keyartMobile' => 'projects/inj-m.jpg',
            'keyartLocation' => 'right',
            'hasLogo' => true,
            'hasBg' => true,
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'slug' => 'lego-star-wars',
            'title' => 'LEGO STAR WARS: THE SKYWALKER SAGA',
            'client' => 'Warner Bros. Games',
            'description' => 'For the official <em>LEGO Star Wars: The Skywalker Saga</em> website, we created a clean, engaging landing page that showcased the game’s features. The site also included a purchase module, allowing users to select the edition, gaming platform, and purchase from their preferred retailer. This project was part of a series of LEGO gaming sites we developed, including <em>LEGO The Incredibles</em> and <em>LEGO DC Super-Villains</em>, each with a focus on a seamless and informative user experience.',
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
                Segments::LOCALIZED,
            ],
            'keyart' => 'projects/lego-star-wars.jpg',
            'keyartMobile' => 'projects/lego-star-wars-m.jpg',
            'keyartLocation' => 'left',
            'hasLogo' => true,
            'hasBg' => true,
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'slug' => 'back-4-blood',
            'title' => 'BACK 4 BLOOD',
            'client' => 'Warner Bros. Games',
            'description' => 'For the official <em>Back 4 Blood</em>> website, we built a robust platform using Laravel, with a headless WordPress site powering news, patch notes, and media content. The WordPress installation utilized Roots.io’s Bedrock and Sage libraries, ensuring a flexible and advanced setup. Laravel integrated seamlessly with WordPress using Corcel, allowing us to ingest data from the WordPress database and convert it into Laravel models. This synergy between Laravel and WordPress created a powerful, efficient solution for managing and displaying dynamic content.',
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
                Segments::VUE_JS,
                Segments::SCSS,
                Segments::HEADLESS_WORDPRESS,
                Segments::ROOTS_BEDROCK,
                Segments::ROOTS_SAGE,
                Segments::LOCALIZED,
            ],
            'keyart' => 'projects/back-4-blood.jpg',
            'keyartMobile' => 'projects/back-4-blood-m.jpg',
            'keyartLocation' => 'right',
            'hasLogo' => true,
            'hasBg' => true,
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'slug' => 'hitman-2',
            'title' => 'HITMAN 2',
            'client' => 'Warner Bros. Games',
            'description' => 'For the official <em>Hitman 2</em> marketing website, we designed and developed a sleek platform with key features including a locations page showcasing different playable maps, a media page with videos and screenshots, and a purchase page where visitors could select the edition, gaming platform, and retailer. Built with Laravel and VueJS, the site was deployed on AWS EC2 instances through AWS Elastic Beanstalk. We set up a smooth GIT deployment pipeline using AWS CodePipeline and CloudFormation templates to ensure seamless updates and delivery.',
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
                Segments::VUE_JS,
                Segments::SCSS,
                Segments::LOCALIZED,
            ],
            'keyart' => 'projects/hitman-2.jpg',
            'keyartMobile' => 'projects/hitman-2-m.jpg',
            'keyartLocation' => 'left',
            'hasLogo' => true,
            'hasBg' => true,
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'slug' => 'shadow-of-war',
            'title' => 'MIDDLE EARTH: SHADOW OF WAR',
            'client' => 'Warner Bros. Games',
            'description' => 'For the official <em>Middle-earth: Shadow of War</em> marketing website, we took over an existing static site built with plain JavaScript. Deployment was handled via AWS CLI, pushing updates to S3 buckets served under AWS CloudFront. One of the biggest challenges was quickly getting up to speed with the inherited codebase, but once familiarized, we were able to enhance and refine the site, ensuring a smooth experience for visitors.',
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
                Segments::LOCALIZED,
            ],
            'keyart' => 'projects/shadow-of-war.jpg',
            'keyartMobile' => 'projects/shadow-of-war-m.jpg',
            'keyartLocation' => 'bottom',
            'hasLogo' => true,
            'hasBg' => true,
        ],
    ];

    protected static array $archived = [
        [
            'classification' => Classification::ENTERTAINMENT,
            'title' => 'HARRY POTTER: MAGIC AWAKENED',
            'client' => 'Warner Bros. Games',
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'title' => 'MORTAL KOMBAT 11',
            'client' => 'Warner Bros. Games',
        ],
        [
            'classification' => Classification::OTHER,
            'title' => 'YOOM',
            'client' => 'Yoom',
        ],
        [
            'classification' => Classification::OTHER,
            'title' => 'DOG CAN HUNT',
            'client' => 'Dog Can Hunt',
        ],
        [
            'classification' => Classification::ECOMMERCE,
            'title' => 'CARDINAL HEALTH',
            'client' => 'Invocure',
        ],
        [
            'classification' => Classification::OTHER,
            'title' => 'THE RESORT AT PAWS UP',
            'client' => 'The Resort at Paws Up',
        ],
        [
            'classification' => Classification::OTHER,
            'title' => 'PUBLICSQUARE',
            'client' => 'PublicSquare',
        ],
        [
            'classification' => Classification::OTHER,
            'title' => 'THE GREENO',
            'client' => 'The Resort at Paws Up',
        ],
        [
            'classification' => Classification::OTHER,
            'title' => 'PANDEXIT WORLD',
            'client' => 'Dog Can Hunt',
        ],
        [
            'classification' => Classification::OTHER,
            'title' => 'GLAMPING.COM',
            'client' => 'Dog Can Hunt',
        ],
        [
            'classification' => Classification::ECOMMERCE,
            'title' => 'CHECKERED PAST',
            'client' => 'Dog Can Hunt',
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'title' => 'RAINBOW BILLY',
            'client' => 'Skybound',
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'title' => 'SPIRITFARER',
            'client' => 'Skybound',
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'title' => 'GANG BEASTS',
            'client' => 'Skybound',
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'title' => 'DISCO ELYSIUM',
            'client' => 'Skybound',
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'title' => 'ESCAPE ACADEMY',
            'client' => 'Skybound',
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'title' => 'WRESTLE QUEST',
            'client' => 'Skybound',
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'title' => 'GLITCH BUSTERS',
            'client' => 'Skybound',
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'title' => 'EASTWARD',
            'client' => 'Skybound',
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'title' => 'PSYCHONAUTS 2',
            'client' => 'Skybound',
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'title' => 'STRAY',
            'client' => 'Skybound',
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'title' => 'CUPBOARD',
            'client' => 'Skybound',
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'title' => 'MORTAL KOMBAT 30TH',
            'client' => 'Warner Bros. Games',
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'title' => 'MORTAL KOMBAT ONSLAUGHT',
            'client' => 'Warner Bros. Games',
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'title' => 'RUMBLEVERSE',
            'client' => 'Epic Games',
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'title' => 'PLAYER FIRST GAMES',
            'client' => 'Player First Games',
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'title' => 'PLATFORM LA',
            'client' => 'The Platform Group',
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'title' => 'THE CALLISTO PROTOCOL',
            'client' => 'Krafton',
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'title' => 'TOM & JERRY',
            'client' => 'Warner Bros. Games',
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'title' => 'WB GAMES',
            'client' => 'Warner Bros. Games',
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'title' => 'WB GAMES',
            'client' => 'Warner Bros. Games',
        ],
        [
            'classification' => Classification::OTHER,
            'title' => 'BUBLUP',
            'client' => 'Bublup',
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'title' => 'WB GAMES',
            'client' => 'Warner Bros. Games',
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'title' => 'FINAL FANTASY XIV',
            'client' => 'Square Enix',
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'title' => 'FINAL FANTASY XV',
            'client' => 'Square Enix',
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'title' => 'RIME',
            'client' => 'Grey Box',
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'title' => 'SIX FOOT',
            'client' => 'Six Foot',
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'title' => 'DREADNAUGHT',
            'client' => 'Grey Box',
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'title' => 'GREYBOX',
            'client' => 'Grey Box',
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'title' => 'LEGO: THE INCREDIBLES',
            'client' => 'Warner Bros. Games',
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'title' => 'LEGO: DC SUPER-VILLIANS',
            'client' => 'Warner Bros. Games',
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'title' => 'LEGO: THE LEGO MOVIE 2',
            'client' => 'Warner Bros. Games',
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'title' => 'SCRIBBLENAUTS',
            'client' => 'Warner Bros. Games',
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'title' => 'NCSOFT',
            'client' => 'Ncsoft',
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'title' => 'STORYSCAPE',
            'client' => 'FoxNext',
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'title' => 'FOXNEXT',
            'client' => 'FoxNext',
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'title' => 'PORTKEY GAMES',
            'client' => 'Portkey Games',
        ],
        [
            'classification' => Classification::ENTERTAINMENT,
            'title' => 'POOL BLITZ',
            'client' => 'Warner Bros. Games',
        ],
        /*[
            'classification' => Classification::OTHER,
            'title' => 'BELKIN',
            'client' => 'Belkin',
        ],*/
        [
            'classification' => Classification::ENTERTAINMENT,
            'title' => 'LIFE IS STRANGE',
            'client' => 'Square Enix',
        ],
        [
            'classification' => Classification::ECOMMERCE,
            'title' => 'THE LIST',
            'client' => 'The Resort at Paws Up',
        ],
    ];

    /**
     * Get all projects as a DataCollection.
     */
    public static function allProjects()
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
                'classification' => $project['classification'],
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

    public static function allArchived()
    {
        $projects = collect(self::$archived)->map(function (array $project) {

            // Normalize contributions to an array
            /*$contributions = isset($project['contributions']) && is_array($project['contributions'])
                ? $project['contributions']
                : [];
            $segments = isset($project['segments']) && is_array($project['segments'])
                ? $project['segments']
                : [];*/

            return ProjectData::from([
                'slug' => '',
                'classification' => $project['classification'],
                'contributions' => [],
                'segments' => [],
                'title' => $project['title'],
                'client' => $project['client'],
                'description' => '',
                'size' => 0,
                'keyart' => null,
                'keyartMobile' => null,
                'keyartLocation' => null,
                'hasLogo' => false,
                'hasBg' => false,
            ]);
        });

        return $projects;
    }


    /**
     * Find a project by slug.
     */
    public static function findProject(string $slug): ?ProjectData
    {
        return self::allProjects()->first(fn (ProjectData $project) => $project->slug === $slug);
    }
}
