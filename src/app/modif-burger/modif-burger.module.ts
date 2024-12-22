import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifBurgerPageRoutingModule } from './modif-burger-routing.module';

import { ModifBurgerPage } from './modif-burger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifBurgerPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ModifBurgerPage]
})
export class ModifBurgerPageModule {}
