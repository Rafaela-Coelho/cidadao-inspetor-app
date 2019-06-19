import { Component } from '@angular/core';


import { EstabelecimentoPage } from '../estabelecimento/estabelecimento';
import { HomePage } from '../home/home';
import { NavController } from 'ionic-angular';
import { DenunciarPage } from '../denunciar/denunciar';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = DenunciarPage;
  tab3Root = EstabelecimentoPage;

  constructor(public navCtrl: NavController) {

  }

  denunciar() {
    this.navCtrl.push(DenunciarPage);
  }
}
