import {Injectable} from '@angular/core';
import {ActionSheetController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ActionSheetService {

  constructor(public actionSheetController: ActionSheetController) {
  }

  async presentActionSheet(header, buttons) {
    const actionSheet = await this.actionSheetController.create({
      header: header,
      buttons: buttons
    });
    await actionSheet.present();
  }
}
