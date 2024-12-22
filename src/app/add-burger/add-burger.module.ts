import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBurgerPageRoutingModule } from './add-burger-routing.module';

import { AddBurgerPage } from './add-burger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddBurgerPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddBurgerPage]
})
export class AddBurgerPageModule {}
