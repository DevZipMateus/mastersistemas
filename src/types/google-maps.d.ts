
declare interface Window {
  google: typeof import('googlemaps');
}

declare namespace google.maps {
  class Map {
    constructor(mapDiv: HTMLElement, opts?: MapOptions);
    setCenter(latLng: LatLng | LatLngLiteral): void;
    setZoom(zoom: number): void;
    setMapTypeControl(show: boolean): void;
    setStreetViewControl(show: boolean): void;
    setRotateControl(show: boolean): void;
    setFullscreenControl(show: boolean): void;
    addListener(eventName: string, handler: Function): MapsEventListener;
  }

  class Marker {
    constructor(opts?: MarkerOptions);
    setMap(map: Map): void;
    setPosition(latLng: LatLng | LatLngLiteral): void;
    setTitle(title: string): void;
    setAnimation(animation: any): void;
    addListener(eventName: string, handler: Function): MapsEventListener;
  }

  class InfoWindow {
    constructor(opts?: InfoWindowOptions);
    open(map: Map, anchor?: MVCObject): void;
    setContent(content: string | Node): void;
    close(): void;
  }

  class MapsEventListener {
    remove(): void;
  }

  class MVCObject {
    addListener(eventName: string, handler: Function): MapsEventListener;
  }

  interface MapOptions {
    center?: LatLng | LatLngLiteral;
    zoom?: number;
    mapTypeControl?: boolean;
    streetViewControl?: boolean;
    rotateControl?: boolean;
    fullscreenControl?: boolean;
    styles?: Array<MapTypeStyle>;
  }

  interface LatLng {
    lat(): number;
    lng(): number;
  }

  interface LatLngLiteral {
    lat: number;
    lng: number;
  }

  interface MarkerOptions {
    position: LatLng | LatLngLiteral;
    map?: Map;
    title?: string;
    animation?: any;
  }

  interface InfoWindowOptions {
    content?: string | Node;
    position?: LatLng | LatLngLiteral;
  }

  interface MapTypeStyle {
    featureType?: string;
    elementType?: string;
    stylers?: Array<MapTypeStyler>;
  }

  interface MapTypeStyler {
    [key: string]: string | number | boolean;
  }

  const Animation: {
    DROP: number;
  };
}
