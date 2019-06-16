import { 
  Component, 
  OnInit, 
  Input,
  OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

import {BruMapService} from '../bru-map-service.service';
import {mapItemClass} from '../classes/mapItems';

import { RootObject, Feature } from '../classes/speeltuig';

import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-my-bru-map',
  templateUrl: './my-bru-map.component.html',
  styleUrls: ['./my-bru-map.component.css']
})
export class MyBruMapComponent implements OnChanges, OnInit {

  //@Input() myItems:number;
  @Input() myMapItems:mapItemClass;

  private title:string="BruMap";

  private imgLocation:string='../assets/img/green.png';
  private imgMarkers:string = '../assets/img/red.png';
  private imgClicked:string = '../assets/img/yellow.png'

  private myResults:object = null;
  private myResultsSpeel:object = null;
  private myResultsZand:object = null;

  private titel2:string;
  private imgIcon:string="";

  private infoWindowOpened = null;

  private myTargetLat:number;
  private myTargetLng:number;
  public myOrigin:Object=null;
  public myDestination:Object=null;
  private myTargetSet:boolean=false;

  constructor(
    private brumapService:BruMapService, 
    private route:Router,
    private activatedroute:ActivatedRoute
    ) { }

    ngOnChanges(changes: SimpleChanges){
      const myMapItems: SimpleChange = changes.myMapItems;
      
      if (changes['myMapItems']) {
        console.log("changes my map items");
      
      }
      console.log("on changes");
    }

  ngOnInit() {

    console.log(this.myMapItems);
    console.log(this.myMapItems.mapTravelMode);
   
    this.RunSpeelObjecten();
    this.RunZandbakken();
    this.RunDefault();
    
/*
    if (this.myMapItems.mapMenu=="speeltuigen") {
      this.RunSpeelObjecten();
      console.log("speeltuig");
    } else if (this.myMapItems.mapMenu=="zandbakken") {
      this.RunZandbakken();
      console.log("zandbak");
    } else if(this.myMapItems.mapMenu="default"){
       this.RunDefault();
    }
    else
     {
      console.log("geen speeltuig en geen zandbak");
      this.RunZandbakken();
    }*/
  }

  onClickMe(){
    //console.log(this.myMapItems.mapType);
    //console.log(this.myMapItems.mapRadius);
    this.myMapItems.mapMenu
  }



  RunSpeelObjecten(){
  //console.log("run speelobjecten");

    this.brumapService.GetSpeeltuigType().subscribe({
      //this.service.GetZandbakType().subscribe({
        next:(result)=>{let root:RootObject = result;
  
          let myFeatures:Feature[] = root.features;
          this.myResults=myFeatures;
          this.myResultsSpeel = this.myResults;
          this.imgIcon = this.imgMarkers;
  
          this.titel2=this.myResults[1].properties.OBJ_TYPE;
  
        }
      })
  }
  RunZandbakken(){
  //console.log("run zandbakken");

    this.brumapService.GetZandbakType().subscribe({
      //this.service.GetZandbakType().subscribe({
        next:(result)=>{let root:RootObject = result;
  
          let myFeatures:Feature[] = root.features;
  
          this.myResults=myFeatures;
          this.myResultsZand = this.myResults;
          this.imgIcon = this.imgMarkers;
  
          this.titel2=this.myResults[1].properties.OBJ_TYPE;
  
        }
      })
  }

  RunDefault(){
    //console.log("run default")
    this.imgIcon = this.imgMarkers;
  
    this.titel2=this.brumapService.MapItems.mapMenu;
  
  }

  onMouseClick($event) {
    this.brumapService.MapItems.mapLat = $event.coords.lat;
    this.brumapService.MapItems.mapLng  = $event.coords.lng;
    this.ResetTargetDirection()

  }

  clickedMarker(label: string, infoWindow, index: number) {

    //console.log(label);
    //console.log(infoWindow);
    //console.log(index);

    if( this.infoWindowOpened ===  infoWindow)
      return;
      
    if(this.infoWindowOpened !== null)
      this.infoWindowOpened.close();
      
    this.infoWindowOpened = infoWindow;
  }

  ResetTargetDirection(){
    if (this.myTargetSet) {
      this.myOrigin = {lat: this.brumapService.MapItems.mapLat, lng: this.brumapService.MapItems.mapLng}
    }
  }

  SetTargetDirection(label){

    if (this.myTargetSet) {    
      if (this.myMapItems.mapMenu=="zandbakken") {
        if (this.myTargetLat!=label.geometry.coordinates[0][0][1]
          && this.myTargetLng!=label.geometry.coordinates[0][0][0]) {

            this.myTargetLat=label.geometry.coordinates[0][0][1];
            this.myTargetLng=label.geometry.coordinates[0][0][0] ;  
            this.myDestination=false;      
        }
      } else {
        if (this.myTargetLat!=label.geometry.coordinates[1]
          && this.myTargetLng!=label.geometry.coordinates[0]) {

            this.myTargetLat=label.geometry.coordinates[1];
            this.myTargetLng=label.geometry.coordinates[0];
            this.myDestination=false; 
        }
      }
    }else{
      if (this.myMapItems.mapMenu=="zandbakken") {
        this.myTargetLat=label.geometry.coordinates[0][0][1];
        this.myTargetLng=label.geometry.coordinates[0][0][0];
      } else {
        this.myTargetLat=label.geometry.coordinates[1];
        this.myTargetLng=label.geometry.coordinates[0];
      }
    }
  }

  clickedMarkerRight(label){
    //console.log(label.geometry.coordinates[0]);
    this.SetTargetDirection(label);

    if (!this.myTargetSet) {

      this.myOrigin = {lat: this.brumapService.MapItems.mapLat, lng: this.brumapService.MapItems.mapLng}
      this.myDestination = {lat: this.myTargetLat, lng: this.myTargetLng}
      this.myTargetSet=true;
    }
    else{
      //this.myTargetLat=0;
      //this.myTargetLng=0;
      //this.myOrigin = {lat: 0, lng: 0}
      //this.myDestination = {lat: 0, lng: 0}
      this.myTargetSet=false
    }
    //console.log(this.myOrigin);
  }

}
