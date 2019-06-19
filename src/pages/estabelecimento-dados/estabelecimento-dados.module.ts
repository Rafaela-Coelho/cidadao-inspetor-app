import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstabelecimentoDadosPage } from './estabelecimento-dados';

@NgModule({
  declarations: [
    EstabelecimentoDadosPage,
  ],
  imports: [
    IonicPageModule.forChild(EstabelecimentoDadosPage),
  ],
})
export class EstabelecimentoDadosPageModule {}
