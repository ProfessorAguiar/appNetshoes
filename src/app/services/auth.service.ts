import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { GoogleAuthProvider } from 'firebase/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afs:AngularFireAuth) { }
  singInWithGoogle(){
    return this.afs.signInWithPopup(new GoogleAuthProvider)
  }
  // registerWithEmailAndPassword(user: {email:string, password:string}){
  //   return this.afs.createUserWithEmailAndPassword(user.email, user.password)
  // }
  // singInWithEmailAndPassword(user: {email:string, password:string}){
  //   return this.afs.signInWithEmailAndPassword(user.email, user.password)
  // }
}
