export interface Properties {
    OBJECTID: number;
    OBJ_TYPE: string;
    TYPE: string;
    O_ID: string;
    NAAM: string;
    AANTAL: number;
    MATERIAAL: string;
    LIGGING: string;
    ORIENTATIE: string;
    STATUS: string;
}

export interface Geometry {
    type: string;
    coordinates: number[];
}

export interface Feature {
    type: string;
    properties: Properties;
    geometry: Geometry;
}

export interface RootObject {
    type: string;
    features: Feature[];
}