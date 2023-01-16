import { Directive,ElementRef,HostListener,Input} from '@angular/core';

@Directive({
  selector: '[appColorMe]'
})
export class ColorMeDirective {
  constructor(private ele:ElementRef) {
   }
   @Input() appColorMe ='';

  @HostListener('mouseover') onMouseOver(){
    this.colorMe(this.appColorMe);
  }
   
  @HostListener('mouseleave') onMouseLeave(){
   this.colorMe("Black");
  }

  private colorMe(color:string){
    this.ele.nativeElement.style.color = color;
  }

}
