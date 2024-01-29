import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequisicaoPageRoutingModule } from './requisicao-routing.module';

import { RequisicaoPage } from './requisicao.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequisicaoPageRoutingModule,
    ComponentesModule
  ],
  declarations: [RequisicaoPage]
})
export class RequisicaoPageModule {}
