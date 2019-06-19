import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CidadaoInspetorProvider } from '../../providers/cidadao-inspetor/cidadao-inspetor';
import { ListaProdutosPage } from '../lista-produtos/lista-produtos';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  ranking_empresas = [];

  constructor(public navCtrl: NavController, public splashScreen: SplashScreen,
    public cidadao_inspetor: CidadaoInspetorProvider) {
    
  }

  getRankProdutos(){
    // this.cidadao_inspetor.getTopProdutos().subscribe(
    //   data => {
    //     const response = (data as any);
    //     console.log(response);
    //     //const result = JSON.parse(response);
    //     //console.log(result);

    //   },
    //   error => {
    //     console.log(error);
    //     //this.closeLoading();
    //   }
    // );
  }

  consultarProdutos(){
    this.navCtrl.push(ListaProdutosPage);
  }


}
