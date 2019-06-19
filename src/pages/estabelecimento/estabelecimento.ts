import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListaEstabelecimentoPage } from '../lista-estabelecimento/lista-estabelecimento';

@Component({
  selector: 'page-estabelecimento',
  templateUrl: 'estabelecimento.html'
})
export class EstabelecimentoPage {
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  verEstabelecimento(){
    this.navCtrl.push(ListaEstabelecimentoPage);
  }

}
