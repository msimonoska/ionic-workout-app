import {Component} from '@angular/core';
import {FoodDiaryService} from '../../services/food-diary/food-diary.service';
import {ProfileService} from '../../services/profile/profile.service';
import {ApiService} from '../../services/api/api.service';
import {LoaderService} from '../../services/loader/loader.service';
import {BarcodeService} from '../../services/barcode/barcode.service';
import {ModalPage} from '../modal/modal.page';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    public foodDiaryService: FoodDiaryService,
    public profileService: ProfileService,
    public apiService: ApiService,
    public loader: LoaderService,
    private barcodeService: BarcodeService,
    private modalController: ModalController
  ) {
  }

  get left_calories() {
    return this.profileService.profile.calorieIntake - this.foodDiaryService.get_cal_intake();
  }

  scan(type) {
    this.barcodeService.scanner().then((data) => {
      this.presentModal(data, type);
    }).catch(err => {
      console.log(err);
    });
      // this.presentModal("737628064502", type);



  }


  async presentModal(barcode, type) {

    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        title: 'Product Details',
        barcode: barcode,
        type:'product'
      }
    });

    modal.onDidDismiss().then(data=>{
      console.log(data)
      if(data.data){
        this.foodDiaryService.add_product_to(type, data.data);
      }

    })
    return await modal.present();
  }


}
