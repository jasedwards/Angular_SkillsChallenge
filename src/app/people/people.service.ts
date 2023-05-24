import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  static people = [{
    id:1,
    firstName:'Jim',
    lastName: 'Parsons',
    birthday: new Date(1977,2,20)
  },{
    id:2,
    firstName: 'Tony',
    lastName: 'Smith',
    birthday: new Date(1937,6,10)
  }]
  constructor(private http: HttpClient) { }

  fetch(filter = '') {
    if(!filter){
      return of(PeopleService.people);
    }
    return of(PeopleService.people.filter(p => p.lastName.toLowerCase().startsWith(filter) || p.firstName.toLowerCase().startsWith(filter)));
  }
}
