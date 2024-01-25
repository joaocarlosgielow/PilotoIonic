import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputsPageRoutingModule } from './inputs-routing.module';

import { InputsPage } from './inputs.page';
import { ComponentesModule } from "../../componentes/componentes.module";

@NgModule({
    declarations: [InputsPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        InputsPageRoutingModule,
        ComponentesModule
    ]
})
export class InputsPageModule {}
