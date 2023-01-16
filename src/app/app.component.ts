import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data = [{movie:"Titanic", hero:"LeonardoDiCaprio"}];
  name="PV";
  disable=true;
  biodataa: any[] = [];
  greet='';
  ele='';
 courses=[];
 colour='yellow';

  sendData(biodata:any)
  {
    this.biodataa.push(biodata);
  }
  onClick()
  {
    this.disable=false;
  }

  onGreet()
  {
    this.greet="Greetings from PV";
  }

}
