import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../services/crud.service';
import { Burger } from '../models/burger.model';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modif-burger',
  templateUrl: './modif-burger.page.html',
  styleUrls: ['./modif-burger.page.scss'],
})
export class ModifBurgerPage implements OnInit {
  burgerForm: FormGroup;
  burgerId: string | null;  

  constructor(
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly crudService: CrudService,
    private readonly navCtrl: NavController,
    private readonly toastController: ToastController
  ) {
    this.burgerForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      imagePath: ['']
    });
    this.burgerId = null;
  }

  ngOnInit() {
    this.burgerId = this.route.snapshot.paramMap.get('id');

    if (this.burgerId) {
      this.crudService.getBurgerById(this.burgerId).subscribe((burger) => {
        if (burger) {
          this.burgerForm.setValue({
            name: burger.name,
            description: burger.description,
            price: burger.price,
            imagePath: burger.imagePath
          });
        } else {
          console.error('Burger introuvable');
        }
      });
    } else {
      console.error('ID du burger manquant');
    }
  }

  async onSubmit() {
    if (this.burgerForm.valid) {
      const updatedBurger: Burger = {
        id: this.burgerId!,
        ...this.burgerForm.value
      };
      try {
        await this.crudService.updateBurger(updatedBurger);
        await this.showToast('Burger modifié avec succès !');
        this.navCtrl.back();
      } catch (error) {
        await this.showToast('Erreur lors de la modification du burger.');
      }
    }
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
}
