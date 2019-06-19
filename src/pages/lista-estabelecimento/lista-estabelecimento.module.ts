import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaEstabelecimentoPage } from './lista-estabelecimento';

@NgModule({
  declarations: [
    ListaEstabelecimentoPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaEstabelecimentoPage),
  ],
})
export class ListaEstabelecimentoPageModule {}
