import { Component, OnInit } from '@angular/core';
import { FirebaseApp, firebaseApp$ } from "@angular/fire/app";
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import { v4 } from 'uuid';
import { doc, collection, setDoc, Firestore, collectionData, getDocs } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from '@angular/fire/auth';
import { AuthService } from './services/auth.service';
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
  async Cadastrar(nome: any, email: any, celular: any, CPF: any, prof: any, senha: any, RPSenha: any) {
    this.mensagem = ''
    if (senha === RPSenha && senha != '') {
      this.cadUser.email = email
      this.cadUser.senha = senha
      try {
        const user = await createUserWithEmailAndPassword(this.auth, email, senha);
        this.imageRef = ref(this.af, `fotos/${this.cadUser.email}`)
        uploadBytes(this.imageRef, this.foto)
        const User = {
          nome: nome,
          email: email,
          celular: celular,
          CPF: CPF,
          profissao: prof,
          senha: senha,
          foto: 'this.imageRef'
        }
        const document = doc(collection(this.firestore, 'Usuarios'));
        this.c = false
        return setDoc(document, User);
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
  async ListarUsers() {
    const querySnapshot = await getDocs(collection(this.firestore, "Usuarios"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()['nome']}`);
    });
  }

  mostrarCadastrar() {
    this.mensagem = ''
    this.c = true
  }
  //npm i --save-dev @types/uuid
  ele: any
  constructor(private auth: Auth, private af: Storage, private firestore: Firestore) { }
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
  googleLogin() {
    const provider = new GoogleAuthProvider()
    signInWithPopup(this.auth, provider).then((res: any) => {
      console.log(res)
      const credential = GoogleAuthProvider.credentialFromResult(res);
      console.log(credential)
      // const token = credential.accessToken;
      // The signed-in user info.
      const user = res.user.displayName;
      console.log(user)
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
    console.log('login com google')
  }
}
