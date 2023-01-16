import { Component,Input,OnInit} from '@angular/core';

@Component({
  selector: 'app-childa',
  templateUrl: './childa.component.html',
  styleUrls: ['./childa.component.scss']
})
export class ChildaComponent implements OnInit {
   @Input() toChilda : any[] = [];
   constructor(){}
   ngOnInit():void{

   }


}
