<?php

namespace App\Data;

use App\Enums\Classification;
use App\Enums\Contributions;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;

class ProjectData extends Data
{
    public function __construct(
        public string $slug,
        public Classification $classification,
        /** @var array<Contributions> */
        public array $contributions,
        public string $title,
        public string $client,
        public string $description,
        public float $size,
        public ?string $keyart,
        public ?string $keyartMobile,
        public ?string $keyartLocation,
        public ?bool $hasLogo,
        public ?bool $hasBg,
    ) {
    }

    /*public static function from(mixed ...$payloads): static
    {
        // Assume the first payload is the array of data
        $data = $payloads[0];

        return new self(
            slug: $data['slug'],
            classification: Classification::from($data['classification']),
            contributions: new DataCollection(Contributions::class, $data['contributions'] ?? []),
            title: $data['title'],
            client: $data['client'],
            description: $data['description'],
            size: $data['size'],
            keyart: $data['keyart'] ?? null,
            keyartMobile: $data['keyartMobile'] ?? null,
            keyartLocation: $data['keyartLocation'] ?? null,
            hasLogo: $data['hasLogo'] ?? null,
            hasBg: $data['hasBg'] ?? null,
        );
    }*/
}
