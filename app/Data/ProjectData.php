<?php

namespace App\Data;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Collection;
use Spatie\LaravelData\Data;

class ProjectData extends Data
{

    public function __construct(
        public string $slug,
        public string $title,
        public float $size,
        public ?string $keyart = null,
        public ?string $keyartLocation = null,
    ) {}

}
