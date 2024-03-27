import { Injectable } from '@angular/core';

import { Feature, PlacesResponse } from '../interfaces/places.interface';
import { PlacesApiClient } from '../api';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public userLocation?: [number, number];
  public isLoadingPLaces: boolean = false;
  public places: Feature[] = [];

  get isUserLocationReady(): boolean {
    return !!this.userLocation;
  }

  constructor(
    private placesApi: PlacesApiClient,
  ) {
    this.getUserLocation();
  }

  public async getUserLocation(): Promise<[number, number]> {
    return new Promise( (resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ( {coords} ) => {
          this.userLocation = [coords.longitude, coords.latitude];
          resolve( this.userLocation );
        },
        ( err ) => {
          alert('No se pudo obtener la GeoLocalización')
          console.log(err);
          reject();
        }
      );
    });
  }


  getPlacesByQuery( query: string = '' ){
    //todo evaluar cuando query es vacio
    if( query.length === 0 ){
      this.isLoadingPLaces = false;
      this.places = [];
      return;
    }

    if( !this.userLocation ) throw Error('No hay user location')

    this.isLoadingPLaces = true;

    this.placesApi.get<PlacesResponse>(`/${query}.json`, {
      params: {
        proximity: this.userLocation?.join(',')
      }
    })
      .subscribe( resp => {
        console.log(resp.features)

        this.isLoadingPLaces = false;
        this.places = resp.features
      });
  }

}
