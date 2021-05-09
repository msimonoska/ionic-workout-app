import { Component } from '@angular/core';
import {ImageService} from '../../services/image/image.service';
import {ModalController} from '@ionic/angular';
import {ModalPage} from '../modal/modal.page';
import {isNewLine} from '@angular/compiler/src/chars';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public imageService: ImageService, private modalController: ModalController) {}

  async openModal(image, index){
    console.log(image)
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps:{
        type:'image',
        title:image.date,
        image: image,
        index: index,
      }
    });
    return await modal.present();
  }


}
