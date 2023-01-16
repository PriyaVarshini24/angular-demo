import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent {
  @Output() newData = new EventEmitter<any>();
  biodata = [{name:"PV",age:21,job:"intern"},{name:"Sathu",age:18,job:"student"}]
  sendData(biodata:any)
  {
   this.newData.emit(biodata)
  }     
}
