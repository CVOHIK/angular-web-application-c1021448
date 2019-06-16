import { Component, OnInit } from '@angular/core';

import {BruMapService} from '../bru-map-service.service';

@Component({
  selector: 'app-my-bru-menu',
  templateUrl: './my-bru-menu.component.html',
  styleUrls: ['./my-bru-menu.component.css']
})
export class MyBruMenuComponent implements OnInit {

  public myMenuOptions:string[]=["default","speeltuigen","zandbakken"];
  public myMenuMaptypes:string[]=["roadmap" , "hybrid", "satellite" , "terrain"];
  public myMenuTravelMode:string[]=['TRANSIT','DRIVING','WALKING','BICYCLING'];
  public mySliderValue:number[]=[0,10,25,50,100,150,200,250,500,1000,2000];
  public myIndex:number=0;

  constructor(private brumapService:BruMapService) { 
    //console.log("bru_menu");
    //console.log(brumapService.MapItems.mapZoom);
    this.getRadiusIndex();
  }

  getRadiusIndex(){
    //console.log("Start Radius Index");
    for (var index = 0; index < this.mySliderValue.length;index ++) {
      //console.log(index);
      //console.log(this.mySliderValue[index]);
      //console.log(this.brumapService.MapItems.mapRadius);
      if (this.mySliderValue[index]==this.brumapService.MapItems.mapRadius) {
        this.myIndex=  index;
        break;
      }
      else{this.myIndex=0;}
    }
    //console.log(this.myIndex);
    //console.log("End Radius Index");
  }

  ngOnInit() {
  }

  OnChangeSlider(){
    this.brumapService.MapItems.mapRadius=this.mySliderValue[this.myIndex];
  }

  clickMenu(item:string){
    //console.log(this.brumapService.MapItems.mapMenu);
    //console.log(this.myValue.mapMenu);
    //console.log(item);
  }

  clickMapItem(item:string){
    //console.log(this.brumapService.MapItems.mapType);
    //console.log(this.myValue.mapType);
    //console.log(item);

  }
  clickMapTravel(item:string){}
}
