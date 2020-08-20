import { Directive, Input, ElementRef, HostBinding, HostListener, Renderer2, OnInit } from '@angular/core';

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective {
    
// constructor(private elementRef : ElementRef , private renderer : Renderer2){
    
// }

// ngOnInit(){
    
// }

// @HostListener('mouseover') mouseover(event:Event){
//     this.renderer.addClass(this.elementRef.nativeElement , 'open');
// }

// @HostListener('mouseleave') mouseleave(event:Event){
//     this.renderer.removeClass(this.elementRef.nativeElement , 'open') ; 
// }

@HostBinding('class.open')isOpen = false ; 
// @HostBinding('style.display') colorRed = 'block';

@HostListener('click') toggleButton(){
    this.isOpen = !this.isOpen;
}

@HostListener('mouseleave') hideToggle(){
    this.isOpen = false;
    //this.colorRed = 'none' ; 
}






}