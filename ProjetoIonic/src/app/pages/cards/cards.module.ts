import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardsPageRoutingModule } from './cards-routing.module';

import { CardsPage } from './cards.page';
import { ComponentesModule } from "../../componentes/componentes.module";

@NgModule({
    declarations: [CardsPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CardsPageRoutingModule,
        ComponentesModule
    ]
})
export class CardsPageModule {}
