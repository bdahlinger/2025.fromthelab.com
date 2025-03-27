<?php

namespace App\Enums;

enum Segments: string
{
    case LARAVEL = 'LARAVEL';
    case VUE_JS = 'VUE JS';

    case REACT = 'REACT';

    case WORDPRESS = 'WORDPRESS';

    case HEADLESS_WORDPRESS = 'HEADLESS WORDPRESS';

    case SHOPIFY = 'SHOPIFY';
    case THREEJS = 'THREE.JS';

    case AWS = 'AWS';
    case INERTIAJS = 'INERTIA.JS';

    case GSAP = 'GSAP';

    case WEBGL = 'WEBGL';

    case CUSTOM_CMS = 'CUSTOM CMS';

    case TWILL = 'TWILL CMS';

    case STATIC = 'STATIC';

    case TAILWIND = 'TAILWIND';

    case SCSS = 'SCSS';

    case SSR = 'SSR';

    case ROOTS_BEDROCK = 'ROOTS BEDROCK';

    case ROOTS_SAGE = 'ROOTS SAGE';

    case SEGMENT = 'SEGMENT';

    case LOCALIZED = 'LOCALIZED';

    case GRIDSOME = 'GRIDSOME';

    case NEXT_JS = 'NEXT.JS';

    case SALESFORCE = 'SALESFORCE API';

    case KLAVIYO = 'KLAVIYO';
}
