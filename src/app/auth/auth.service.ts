import { Injectable } from '@angular/core';
import * as firebase from 'firebase' ; 
import { AngularFireAuth } from '@angular/fire/auth/';

@Injectable() 
export class AuthService {

    constructor() {}

    signupUser(email:string, password : string ){
        return new Promise<any>(
            (resolve, reject) => {
                firebase.auth().createUserWithEmailAndPassword(email,password).then(
                    res=>{
                        resolve(res) ; 
                    }
                    ,err => {
                        reject(err) ; 
                    }
                )      
            }
        )  
    }

    signInUser(email:string , password : string ){
        firebase.auth().signInWithEmailAndPassword(email, password).then(
            response => console.log(response) ; 


            
        );
    }    
}