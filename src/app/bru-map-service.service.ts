import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RootObject} from 'src/app/classes/speeltuig'
import {mapItemClass} from './classes/mapItems';

@Injectable({
  providedIn: 'root'
})
export class BruMapService {

  public MapItems : mapItemClass;

  constructor(private http:HttpClient) {
    this.MapItems=new mapItemClass (51.2210622,4.3996732,14,'roadmap',150,'speeltuigen','TRANSIT');
   }

   GetSpeeltuigType(){
    return this.http.get<RootObject>("https://opendata.arcgis.com/datasets/552f2f407d2142248385d1b16028d7c8_280.geojson");
  }

  GetZandbakType(){
    return this.http.get<RootObject>("https://opendata.arcgis.com/datasets/34597cc18d024bc1af7a3741ce4a526e_281.geojson");
  }

}
