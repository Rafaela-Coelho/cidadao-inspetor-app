import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { urlToNavGroupStrings } from 'ionic-angular/umd/navigation/url-serializer';
import { EstabelecimentoPage } from '../estabelecimento/estabelecimento';
import { EstabelecimentoDadosPage } from '../estabelecimento-dados/estabelecimento-dados';

/**
 * Generated class for the ListaEstabelecimentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-estabelecimento',
  templateUrl: 'lista-estabelecimento.html',
})
export class ListaEstabelecimentoPage {
  lista_estabelecimentos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaEstabelecimentoPage');
    this.getEstabelecimentos();
  }

  getEstabelecimentos() {
    this.lista_estabelecimentos.push({
      nome: "Padaria Serpa",
      irregularidades: "Rachadura",
      comentario: "A parede da padaria está totalmente rachada.",
      img: "assets/imgs/rachadura.png",
      data_notificacao: "29/10/2018"
    },
      {
        nome: "Padaria dos irmãos Lima",
        irregularidades: "Rachadura",
        comentario: "A parede da padaria está totalmente rachada.",
        img: "assets/imgs/rachadura.png",
        data_notificacao: "29/10/2018"
      },
      {
        nome: "Padaria e Pizzaria Hugo's",
        irregularidades: "Rachadura",
        comentario: "A parede da padaria está totalmente rachada.",
        img: "assets/imgs/rachadura.png",
        data_notificacao: "29/10/2018"
      }
    );

  }

  verEstabelecimento(estabelecimento){
    this.navCtrl.push(EstabelecimentoDadosPage, {estabelecimento_dados: estabelecimento});
  }

}
