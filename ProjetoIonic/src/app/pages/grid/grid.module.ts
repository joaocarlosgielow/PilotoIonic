import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridPageRoutingModule } from './grid-routing.module';

import { GridPage } from './grid.page';
import { ComponentesModule } from "../../componentes/componentes.module";

@NgModule({
    declarations: [GridPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GridPageRoutingModule,
        ComponentesModule
    ]
})
export class GridPageModule {}
