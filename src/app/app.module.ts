import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

<<<<<<< HEAD
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [
    AppComponent ,
    ServerComponent,
    ServersComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule

=======
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
>>>>>>> 271ee60a4025704915e619bf60ce40e93bcffdc2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
