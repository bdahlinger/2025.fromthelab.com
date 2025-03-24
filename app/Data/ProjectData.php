<?php

namespace App\Data;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Collection;
use Spatie\LaravelData\Data;
use App\Enums\Classification;

class ProjectData extends Data
{

    public function __construct(
        public string $slug,
        public Classification $classification,
        public string $title,
        public string $client,
        public string $description,
        public float $size,
        public ?string $keyart = null,
        public ?string $keyartMobile = null,
        public ?string $keyartLocation = null,
        public ?bool $hasLogo = false,
        public ?bool $hasBg = false
    ) {}

}
