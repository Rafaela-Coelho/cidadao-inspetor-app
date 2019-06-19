import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EstabelecimentoDadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estabelecimento-dados',
  templateUrl: 'estabelecimento-dados.html',
})
export class EstabelecimentoDadosPage {
  estabelecimento_dados: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.estabelecimento_dados = this.navParams.get('estabelecimento_dados');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstabelecimentoDadosPage');
  }

}
