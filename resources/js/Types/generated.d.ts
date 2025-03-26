declare namespace App.Data {
export type ProjectData = {
slug: string;
classification: App.Enums.Classification;
contributions: Array<App.Enums.Contributions>;
segments: Array<App.Enums.Segments>;
title: string;
client: string;
description: string;
size: number;
keyart: string | null;
keyartMobile: string | null;
keyartLocation: string | null;
hasLogo: boolean | null;
hasBg: boolean | null;
};
}
declare namespace App.Enums {
export enum Classification { 'ENTERTAINMENT' = 'Entertainment', 'ECOMMERCE' = 'Ecommerce', 'OTHER' = 'Other' };
export enum Contributions { 'DEVOPS' = 'DEVOPS', 'DESIGN' = 'DESIGN', 'FRONTEND' = 'FRONTEND', 'BACKEND' = 'BACKEND', 'IDEATION' = 'IDEATION', 'UX' = 'UX' };
export enum Segments { 'LARAVEL' = 'LARAVEL', 'VUE_JS' = 'VUE JS', 'REACT' = 'REACT', 'WORDPRESS' = 'WORDPRESS', 'HEADLESS_WORDPRESS' = 'HEADLESS WORDPRESS', 'SHOPIFY' = 'SHOPIFY', 'THREEJS' = 'THREE.JS', 'AWS' = 'AWS', 'INERTIAJS' = 'INERTIA.JS', 'GSAP' = 'GSAP', 'WEBGL' = 'WEBGL', 'CUSTOM_CMS' = 'CUSTOM CMS', 'TWILL' = 'TWILL CMS', 'STATIC' = 'STATIC', 'TAILWIND' = 'TAILWIND', 'SCSS' = 'SCSS', 'SSR' = 'SSR', 'ROOTS_BEDROCK' = 'ROOTS BEDROCK', 'ROOTS_SAGE' = 'ROOTS SAGE', 'SEGMENT' = 'SEGMENT', 'LOCALIZED' = 'LOCALIZED', 'GRIDSOME' = 'GRIDSOME', 'NEXT_JS' = 'NEXT.JS', 'SALESFORCE' = 'SALESFORCE API' };
}
