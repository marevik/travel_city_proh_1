import { Directive, Renderer2, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appOrangeColor]'
})
export class OrangeColorDirective  implements OnInit {
  ngOnInit(){
    this.renderer.setStyle(this.elementRef.nativeElement,"width","200px")
    this.renderer.setStyle(this.elementRef.nativeElement,"height","200px")
    this.renderer.setStyle(this.elementRef.nativeElement,"background-color","orange")
    this.renderer.setStyle(this.elementRef.nativeElement,"margin","110px")
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }


  @HostListener ('mouseenter') mouseEnter(){
    const{nativeElement}=this.elementRef;
    this.renderer.setStyle(nativeElement,'background-color','red');
  }

  @HostListener ('mouseleave') mouseLeave(){
    const{nativeElement}=this.elementRef;
    this.renderer.setStyle(nativeElement,'background-color','blue');
  }
}


