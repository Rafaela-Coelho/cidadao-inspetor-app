import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultaEstabelecimentoPage } from './consulta-estabelecimento';

@NgModule({
  declarations: [
    ConsultaEstabelecimentoPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultaEstabelecimentoPage),
  ],
})
export class ConsultaEstabelecimentoPageModule {}
