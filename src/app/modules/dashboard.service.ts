import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Covid } from '../models/Covid.model';

const API_URL = "http://127.0.0.1:8080/api/covids";
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
 

  constructor(private http: HttpClient) { }


  getCoviddata() {
    
    return this.http.get<Covid[]>(API_URL);

  }




  bigChart() {
    
    
    return [{
      name: 'Cases',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
      name: 'Recovered',
      data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
      name: 'Deaths',
      data: [163, 203, 276, 408, 547, 729, 628]
    }, {
      name: 'Eliminated Cases',
      data: [18, 31, 54, 156, 339, 818, 1201]
    }];
  }

  cards() {
    return [71, 78, 39, 66];
  }

  pieChart() {
    return [{
      name: 'Casablanca_Settat',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'Tanger_Tetouan_AlHoceima',
      y: 11.84
    }, {
      name: 'Marrakech_Safi',
      y: 10.85
    }, {
      name: 'Fes_Meknes',
      y: 4.67
    }, {
      name: 'Rabat_Sale_Kenitra',
      y: 4.18
    }, {
      name: 'Sous_Massa',
      y: 1.64
    }, {
      name: 'Draa_Tafilalet',
      y: 1.6
    }, {
      name: 'Oriental',
      y: 1.2
    }, {
      name: 'BeniMellal_Khenifra',
      y: 2.61
    }];
  }
}
