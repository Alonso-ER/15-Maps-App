// Generated by https://quicktype.io

export interface PlacesResponse {
  type:        string;
  query:       string[];
  features:    Feature[];
  attribution: string;
}

export interface Feature {
  id:            string;
  type:          string;
  place_type:    string[];
  relevance:     number;
  properties:    Properties;
  text_es:       string;
  place_name_es: string;
  text:          string;
  place_name:    string;
  center:        number[];
  geometry:      Geometry;
  context:       Context[];
}

export interface Context {
  id:           ID;
  mapbox_id:    MapboxID;
  text_es:      string;
  text:         string;
  wikidata?:    Wikidata;
  language_es?: Language;
  language?:    Language;
  short_code?:  ShortCode;
}

export enum ID {
  Country8863 = "country.8863",
  Place15894687 = "place.15894687",
  Postcode265883295 = "postcode.265883295",
  Region50335 = "region.50335",
}

export enum Language {
  Es = "es",
}

export enum MapboxID {
  DXJuOm1IeHBsYzo4B2LM = "dXJuOm1ieHBsYzo4b2lm",
  DXJuOm1IeHBsYzp4Sjg = "dXJuOm1ieHBsYzp4Sjg",
  DXJuOm1IeHBsYzpEOWtPbnc = "dXJuOm1ieHBsYzpEOWtPbnc",
  DXJuOm1IeHBsYzpJcDg = "dXJuOm1ieHBsYzpJcDg",
}

export enum ShortCode {
  MX = "mx",
  MXGua = "MX-GUA",
}

export enum Wikidata {
  Q189128 = "Q189128",
  Q46475 = "Q46475",
  Q96 = "Q96",
}

export interface Geometry {
  coordinates: number[];
  type:        string;
}

export interface Properties {
  foursquare: string;
  landmark:   boolean;
  address?:   string;
  category:   string;
  maki?:      string;
}
