import { Component } from '@angular/core';
import {ActionSheetService} from '../../services/action-sheet/action-sheet.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private actionSheetService: ActionSheetService) {}

  showCameraOptions(){
    console.log("function clicked")

    this.actionSheetService.presentActionSheet("Options",[
      {
        text: 'Camera',
        handler: () => {
          console.log('Camera clicked');
        }
      },
      {
        text: 'Barcode Scanner',
        handler: () => {
          console.log('Barcode Scanner clicked');
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
    ])
  }

}
