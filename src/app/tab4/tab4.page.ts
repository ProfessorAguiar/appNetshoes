import { Component, OnInit, Input } from '@angular/core';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  @Input() email:string=''
  imgUrl: any = []
  cadUser = {
    email: '',
    senha: ''
  }
  constructor(private auth: Auth, private af: Storage) { }
  public userName:any=''
  public userPhoto:any=''
  carregarPerfil(){
    this.userName=sessionStorage.getItem('Usuario');
    this.userPhoto=sessionStorage.getItem('fotoPerfil');
    console.log(this.userName)
  }
  ngAfterViewInit(){
    this.userName=sessionStorage.getItem('Usuario');
    this.userPhoto=sessionStorage.getItem('fotoPerfil');
  }
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
