import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { EstabelecimentoPage } from '../pages/estabelecimento/estabelecimento';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DenunciarPage } from '../pages/denunciar/denunciar';
import { CidadaoInspetorProvider } from '../providers/cidadao-inspetor/cidadao-inspetor';
import { ListaProdutosPage } from '../pages/lista-produtos/lista-produtos';
import { ListaEstabelecimentoPage } from '../pages/lista-estabelecimento/lista-estabelecimento';
import { EstabelecimentoDadosPage } from '../pages/estabelecimento-dados/estabelecimento-dados';

@NgModule({
  declarations: [
    MyApp,
    EstabelecimentoPage,
    HomePage,
    DenunciarPage,
    TabsPage,
    ListaProdutosPage,
    ListaEstabelecimentoPage,
    EstabelecimentoDadosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DenunciarPage,
    EstabelecimentoPage,
    HomePage,
    TabsPage,
    ListaProdutosPage,
    ListaEstabelecimentoPage,
    EstabelecimentoDadosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CidadaoInspetorProvider
  ]
})
export class AppModule { }
