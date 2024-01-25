import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataPageRoutingModule } from './data-routing.module';

import { DataPage } from './data.page';
import { ComponentesModule } from "../../componentes/componentes.module";

@NgModule({
    declarations: [DataPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DataPageRoutingModule,
        ComponentesModule
    ]
})
export class DataPageModule {}
