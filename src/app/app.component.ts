import { Component, OnInit } from '@angular/core';
import { FirebaseApp, firebaseApp$ } from "@angular/fire/app";
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import { v4 } from 'uuid';
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
  foto: any
  mostrarApp = false
  c = false
  mensagem = ''
  imgUrl: any = []
  cadUser = {
    email: '',
    senha: ''
  }
  imageRef: any

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
      this.cadUser.email = email
      this.cadUser.senha = senha
      try {
        const user = await createUserWithEmailAndPassword(this.auth, email, senha);
        this.imageRef = ref(this.af, `fotos/${this.cadUser.email}`)
        uploadBytes(this.imageRef, this.foto)
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
  async GuardarFoto($event: any) {
    console.log(this.cadUser.email)
    if (this.cadUser.email != '') {
      this.foto = $event.target.files[0]
      console.log(this.foto)
      // this.imageRef = ref(this.af, `fotos/${this.cadUser.email}`)
      // uploadBytes(this.imageRef, this.foto)
    }
  }


  mostrarCadastrar() {
    this.mensagem = ''
    this.c = true
  }
  //npm i --save-dev @types/uuid
  ele: any
  constructor(private auth: Auth, private af: Storage) { }
  ngOnInit() {
    listAll(ref(this.af, 'fotos')).then(imgs => {
      imgs.items.forEach((im) => {
        console.log(im.fullPath)
        console.log(im.bucket)
        getDownloadURL(im).then((res) => {
          console.log(res)
          this.imgUrl.push(res)
        })

      })
      console.log(imgs.items)
      // imgs.items.forEach(val=>{
      //   getDownloadURL(val).then(url=>{
      //     this.imgUrl(data=>[...],url)
      //   })
      // })
    })
  }
}
