import { Component, OnInit } from '@angular/core';
import { Storage, listAll, getDownloadURL, ref } from '@angular/fire/storage';

@Component({
  selector: 'app-lista-fotos',
  templateUrl: './lista-fotos.component.html',
  styleUrls: ['./lista-fotos.component.scss'],
})
export class ListaFotosComponent implements OnInit {
  imgUrl: any = []
  constructor(private af: Storage) { }

  ngOnInit() {
    listAll(ref(this.af, 'fotos')).then(imgs => {
      imgs.items.forEach((im) => {
        getDownloadURL(im).then((res) => {
          console.log(res)
          this.imgUrl.push(res)
        })
      })
    })

  }
}
