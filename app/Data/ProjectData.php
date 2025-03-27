<?php

namespace App\Data;

use App\Enums\Classification;
use App\Enums\Contributions;
use App\Enums\Segments;
use Spatie\LaravelData\Data;

class ProjectData extends Data
{
    public function __construct(
        public string $slug,
        public Classification $classification,
        /** @var array<Contributions> */
        public array $contributions,
        /** @var array<Segments> */
        public array $segments,
        public string $title,
        public string $client,
        public string $description,
        public float $size,
        public ?string $keyart,
        public ?string $keyartMobile,
        public ?string $keyartLocation,
        public ?bool $hasLogo,
        public ?bool $hasBg,
    ) {}

}
