import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { Burger } from '../models/burger.model';
import { ToastController } from '@ionic/angular';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-list-burger',
  templateUrl: './list-burger.page.html',
  styleUrls: ['./list-burger.page.scss'],
})
export class ListBurgerPage implements OnInit {

  burgers: Burger[] = [];

  constructor(
    private readonly crudService: CrudService,
    private readonly toastController: ToastController
  ) { }

  ngOnInit() {
    this.loadBurgers();
  }

  loadBurgers() {
    this.crudService.getAllBurgers().subscribe((data: Burger[]) => {
      this.burgers = data;
      console.log('Liste des burgers:', this.burgers);
    }, (error) => {
      console.error('Erreur lors de la récupération des burgers:', error);
    });
  }

  async deleteBurger(id?: string) {
    if(id){
      try {
        await this.crudService.deleteBurger(id);
        await this.showToast('Burger supprimé avec succès !');
      } catch (error) {
        await this.showToast('Erreur lors de la supression du burger.');
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

  async shareContent() {
    try {
      await Share.share({
        title: 'Découvrez cette application !',
        text: 'Ceci est un message de partage depuis mon application Ionic.',
        url: 'https://exemple.com',
        dialogTitle: 'Partagez avec vos amis'
      });
    } catch (error) {
      console.error('Erreur lors du partage :', error);
    }
  }
  
}
