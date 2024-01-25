import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { InputTorgeComponent } from './input-torge/input-torge.component';



@NgModule({
  declarations: [
    CabecalhoComponent,
    InputTorgeComponent
  ],
  exports: [
    CabecalhoComponent,
    InputTorgeComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentesModule { }
