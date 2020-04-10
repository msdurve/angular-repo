import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  //template:'<app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  
  isServerCreationAllowed = false;
  isServerCreated = false; 
  serverName = 'Mayank' ; 
  serverCreateText = 'Server is not created ... ' ; 
  servers = ['Server1'] ; 
 
  constructor() { }

  ngOnInit() {
    setTimeout(()=> {
      this.isServerCreationAllowed = true;
    } , 2000);
  }

  onCreateServer(){
    this.isServerCreated = true; 
    this.servers.push(this.serverName);
    this.serverCreateText = 'Server is created' ; 
  }

  onUpdateServerName(event : Event){
      //console.log(event) ; 
      this.serverName = (<HTMLInputElement>event.target).value;
  }
}
