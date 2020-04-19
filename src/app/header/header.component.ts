import { Component, Output ,EventEmitter } from '@angular/core';
import { TranslationWidth } from '@angular/common';


@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent{

    @Output() onHeaderClick = new EventEmitter<string>();
    
    onHeaderClickEvent(selectEl : string){
        console.log(selectEl);
       this.onHeaderClick.emit(selectEl);     
    }

}