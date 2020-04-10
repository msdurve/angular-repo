import { Component } from '@angular/core';

@Component({
    selector:'app-server' ,
    templateUrl: './server.component.html'
})
export class ServerComponent{
    id : number = 10 ;
    name : string = 'Server1' ; 
    nameToTestGit = 'TestGitFromVSCOde' ; 
    serverStatus : string =  'offline';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline' ; 
     }

    getServerId(){
        return this.id;
    }

    getColor(){
        return  this.serverStatus === 'online' ? 'green' : 'red'   ; 
    }
}