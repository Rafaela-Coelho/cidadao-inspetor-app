import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';  

/**
 * Generated class for the DenunciarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-denunciar',
  templateUrl: 'denunciar.html',
})
export class DenunciarPage {
  denuncia_form: FormGroup;

  denuncia_dados = {
    nome_contato: '',
    doc_contato: '',
    email_contato: '',
    telefone_contato: '',
    cep_contato: '',
    endereco_contato: '',
    numero_contato: '',
    bairro_contato: '',
    cidade_contato: '',
    estado_contato: '',

    nome_denunciado: '',
    doc_denunciado: '',
    email_denunciado: '',
    telefone_denunciado: '',
    cep_denunciado: '',
    endereco_denunciado: '',
    numero_denunciado: '',
    bairro_denunciado: '',
    cidade_denunciado: '',
    estado_denunciado: '',
    comentario: '',
    ponto_principal: ''

  }


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder,  public alerCtrl: AlertController,
    public viewCtrl: ViewController) {

    this.denuncia_form = this.formBuilder.group({
      nome_contato: [this.denuncia_dados.nome_contato],
      doc_contato: [this.denuncia_dados.doc_contato],
      email_contato: [this.denuncia_dados.email_contato],
      telefone_contato: [this.denuncia_dados.telefone_contato],
      cep_contato: [this.denuncia_dados.cep_contato],
      endereco_contato: [this.denuncia_dados.endereco_contato],
      numero_contato: [this.denuncia_dados.numero_contato],
      bairro_contato: [this.denuncia_dados.bairro_contato],
      cidade_contato: [this.denuncia_dados.cidade_contato],
      estado_contato: [this.denuncia_dados.estado_contato],

      nome_denunciado: [this.denuncia_dados.nome_denunciado],
      doc_denunciado: [this.denuncia_dados.doc_denunciado],
      email_denunciado: [this.denuncia_dados.email_denunciado],
      telefone_denunciado: [this.denuncia_dados.telefone_denunciado],
      cep_denunciado: [this.denuncia_dados.cep_denunciado],
      endereco_denunciado: [this.denuncia_dados.endereco_denunciado],
      numero_denunciado: [this.denuncia_dados.numero_denunciado],
      bairro_denunciado: [this.denuncia_dados.bairro_denunciado],
      cidade_denunciado: [this.denuncia_dados.cidade_denunciado],
      estado_denunciado: [this.denuncia_dados.estado_denunciado],
      comentario: [this.denuncia_dados.comentario],
      ponto_principal: [this.denuncia_dados.ponto_principal]


    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DenunciarPage');
  }
  
  alertInfo() {
    let alert = this.alerCtrl.create({
      title: 'Enviado',
      message: 'Sua denúncia foi enviada e será analisada.',
      cssClass: 'alertCustomCss',
      buttons: ['Ok']
    });
    alert.onDidDismiss(() => {
      this.dismiss();
    });
    alert.present();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
