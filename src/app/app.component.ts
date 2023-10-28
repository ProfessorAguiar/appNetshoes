import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  mostrarApp=false
  c=false
  mensagem=''
  login={user:'admin',pass:123456}
  fazerLogin(usuario:any, senha:any){
    this.mensagem=''
    console.log(`fazendo login do usuário: ${usuario} com senha: ${senha}`)
    if(usuario==this.login.user && senha==this.login.pass){
      this.mostrarApp=true
    }else{
      this.mensagem='Usuário não cadastrado ou senha inválida!'
    }
  }

  Cadastrar(usuario:any, senha:any){
    this.mensagem=''
    console.log(`fazendo login do usuário: ${usuario} com senha: ${senha}`)
    if(usuario!='' && senha!=''){
      this.c=false
    }else{
      this.mensagem='Digite em nome de Usuário e uma senha!'
    }
  }
  mostrarCadastrar(){
    this.mensagem=''
    this.c=true
  }
  constructor() {}
}
