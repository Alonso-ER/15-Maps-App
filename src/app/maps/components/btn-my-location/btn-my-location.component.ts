import { Component } from '@angular/core';
import { MapService, PlacesService } from '../../services';
import { LngLat } from 'mapbox-gl';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrl: './btn-my-location.component.css'
})
export class BtnMyLocationComponent {

  constructor(
    private mapService: MapService,
    private placesService: PlacesService
  ){}

  goToMyLocation(){

    if( !this.placesService.isUserLocationReady ) throw Error('No hay ubicación de usuario');
    if( !this.mapService.isMapReady ) throw Error('No se ha iniciado el mapa');

    this.mapService.flyTo( this.placesService.userLocation! );

  }

}
