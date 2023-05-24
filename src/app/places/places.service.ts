import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  static places = [ {
    id: 1,
    name: "Big Ben",
    city: "London",
    state: "UK"
  },{
    id: 2,
    name: "Willis Tower",
    city: "Chicago",
    state: "Illinois"
  }]
  constructor(private http: HttpClient) { }

  fetch(filter = '') {
    if(!filter){
      return of(PlacesService.places);
    }
    return of(PlacesService.places.filter(p => p.name.toLowerCase().startsWith(filter) || p.city.toLowerCase().startsWith(filter)));
  }
}
