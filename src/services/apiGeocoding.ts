import type { Position } from "../types";

export type ReverseGeocodeResponse = {
  locality?: string;
  city?: string;
  postcode?: string;
  countryName?: string;
  [key: string]: unknown;
};

export async function getAddress({ latitude, longitude }: Position): Promise<ReverseGeocodeResponse> {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
  );
  if (!res.ok) throw Error("Failed getting address");

  const data = (await res.json()) as ReverseGeocodeResponse;
  return data;
}
