import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, ViewController } from 'ionic-angular';

/**
 * Generated class for the ListaProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-produtos',
  templateUrl: 'lista-produtos.html',
})
export class ListaProdutosPage {
  lista_produtos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController,  public alerCtrl: AlertController,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaProdutosPage');
    this.getProdutos();
  }

  getProdutos() {
    this.lista_produtos.push({
      nome: 'Cloro Maria',
      ano_notificacao: '13/04/2018',
      fabricante: 'ONE-STEP CORPY'
    },
      {
        nome: 'Cloro zen',
        ano_notificacao: '28/08/2018',
        fabricante: 'KERR CORPORATION'
      },
      {
        nome: 'Cloro zen',
        ano_notificacao: '28/08/2018',
        fabricante: 'KERR CORPORATION'
      },
      {
        nome: 'Cloro WELCH',
        ano_notificacao: '28/08/2018',
        fabricante: 'VOLK'
      },
      {
        nome: 'Cook Cloro',
        ano_notificacao: '28/08/2018',
        fabricante: 'Hanson'
      },
      {
        nome: 'Cloro Clean',
        ano_notificacao: '28/08/2018',
        fabricante: 'Cleanner'
      },
      {
        nome: 'White cloro',
        ano_notificacao: '28/08/2018',
        fabricante: 'Corp clean'
      },
      {
        nome: 'Cloro Ella',
        ano_notificacao: '28/08/2018',
        fabricante: 'Ella corpy'
      },
      {
        nome: 'Cloro zen',
        ano_notificacao: '28/08/2018',
        fabricante: 'KERR CORPORATION'
      },
      {
        nome: 'Color cloro',
        ano_notificacao: '28/08/2018',
        fabricante: 'Danus RF'
      },
      {
        nome: 'Denca cloro',
        ano_notificacao: '28/08/2018',
        fabricante: 'DUN'
      },
      {
        nome: 'cloro karpus',
        ano_notificacao: '28/08/2018',
        fabricante: 'Karpus company'
      },
      {
        nome: 'Cloro A',
        ano_notificacao: '28/08/2018',
        fabricante: 'Annis comp'
      },
      {
        nome: 'Drky cloro',
        ano_notificacao: '28/08/2018',
        fabricante: 'DRKA'
      },
      {
        nome: 'Cloro jun',
        ano_notificacao: '28/08/2018',
        fabricante: 'JUNIORES'
      },
      {
        nome: 'Dorta cloros',
        ano_notificacao: '28/08/2018',
        fabricante: 'Dirf'
      },
      {
        nome: 'DHA Cloros',
        ano_notificacao: '28/08/2018',
        fabricante: 'DHA'
      },
      {
        nome: 'Tyrk cloros',
        ano_notificacao: '28/08/2018',
        fabricante: 'TK'
      },
      {
        nome: 'Jeri cloros',
        ano_notificacao: '28/08/2018',
        fabricante: 'JC'
      }
    )
  }

  consultarProdutos(){
    this.navCtrl.push(ListaProdutosPage);
  }

  alertInfo(fab, data) {
    let alert = this.alerCtrl.create({
      title: 'Informações do produto',
      message: 'Fabricante: ' + fab + '\nData da notificação: ' + data,
      cssClass: 'alertCustomCss',
      buttons: ['Ok']
    });
    alert.onDidDismiss(() => {
    });
    alert.present();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


}
