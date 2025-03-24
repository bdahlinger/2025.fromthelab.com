declare namespace App.Data {
export type ProjectData = {
slug: string;
classification: App.Enums.Classification;
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
export enum Classification { 'ENTERTAINMENT' = 'entertainment', 'ECOMMERCE' = 'ecommerce', 'OTHER' = 'other' };
}
