import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CrudService } from '../services/crud.service';
import { NavController, ToastController } from '@ionic/angular';

export function urlValidator(control: AbstractControl): ValidationErrors | null {
  const url = control.value;
  if (url && !/^https?:\/\/[^\s]+$/.test(url)) {
    return { invalidUrl: 'L\'URL doit commencer par http:// ou https://' };
  }
  return null;
}

@Component({
  selector: 'app-add-burger',
  templateUrl: './add-burger.page.html',
  styleUrls: ['./add-burger.page.scss'],
})
export class AddBurgerPage implements OnInit {
  
  burgerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private crudService: CrudService,
    private navCtrl: NavController, 
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.burgerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      price: [null, [Validators.required, Validators.min(1)]],
      imagePath: ['', [urlValidator]]
    });
  }

  async onSubmit() {
    if (this.burgerForm.valid) {
      const newBurger = this.burgerForm.value;
      try {
        await this.crudService.createBurger(newBurger);
        await this.showToast('Burger ajouté avec succès !');
        this.navCtrl.back();
      } catch (error) {
        await this.showToast('Erreur lors de l\'ajout du burger.');
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
