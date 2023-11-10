import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { provideAuth, getAuth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { provideStorage, getStorage } from '@angular/fire/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCNWEjx5OyfoercifthlvjQkJXDnF-z9ok",
  authDomain: "netshoes-43932.firebaseapp.com",
  projectId: "netshoes-43932",
  storageBucket: "netshoes-43932.appspot.com",
  messagingSenderId: "59072359974",
  appId: "1:59072359974:web:2865743af1ba5f8e0c80e7",
  measurementId: "G-R9BKFGB3KH"
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCNWEjx5OyfoercifthlvjQkJXDnF-z9ok",
//   authDomain: "netshoes-43932.firebaseapp.com",
//   projectId: "netshoes-43932",
//   storageBucket: "netshoes-43932.appspot.com",
//   messagingSenderId: "59072359974",
//   appId: "1:59072359974:web:2865743af1ba5f8e0c80e7",
//   measurementId: "G-R9BKFGB3KH"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
