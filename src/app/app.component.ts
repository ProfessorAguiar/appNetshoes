import { Component } from '@angular/core';
import { FirebaseApp } from "@angular/fire/app";

import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  mostrarApp = false
  c = false
  mensagem = ''
  login = { user: 'admin', pass: 123456 }

  async fazerLogin(email: any, senha: any) {
    this.mensagem = ''

    try {
      const user = await signInWithEmailAndPassword(this.auth, email, senha);
      this.mostrarApp = true
      return user;
    } catch (e) {
      this.mensagem = 'Usuário não cadastrado ou senha inválida!'
      return null;
    }
  }
  logout() {
    this.mostrarApp = false
		return signOut(this.auth);
	}
  async Cadastrar(email: any, senha: any) {
    this.mensagem = ''
    if (email != '' && senha != '') {
      try {
        const user = await createUserWithEmailAndPassword(this.auth, email, senha);
        this.c = false
        return user;
      } catch (e) {
        return null;
      }
    } else {
      this.mensagem = 'Digite em nome de Usuário e uma senha!'
      return
    }
  }



  mostrarCadastrar() {
    this.mensagem = ''
    this.c = true
  }

  constructor(private auth: Auth) { }
}
