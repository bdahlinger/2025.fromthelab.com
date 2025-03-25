<?php

namespace App\Enums;

enum Contributions: string
{
    case DEVOPS = 'DEVOPS';
    case DESIGN = 'DESIGN';
    case FRONTEND = 'FRONTEND';
    case BACKEND = 'BACKEND';
    case IDEATION = 'IDEATION';
    case UX = 'UX';
}
