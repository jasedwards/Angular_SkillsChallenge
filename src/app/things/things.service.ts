import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThingsService {
  static things = [{
    id:1,
    name: 'shoe',
    description: 'it goes on your feet'
  },{
    id:2,
    name: 'towel',
    description: 'you can dry things with it'
  }]
  constructor(private http: HttpClient) { }

  fetch(filter = '') {
    if(!filter){
      return of(ThingsService.things);
    }
    return of(ThingsService.things.filter(p => p.name.toLowerCase().startsWith(filter) || p.description.toLowerCase().startsWith(filter)));
  }
}
