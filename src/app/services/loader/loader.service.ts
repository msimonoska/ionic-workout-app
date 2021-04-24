import { Injectable } from '@angular/core';
import {LoadingController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loading:any = null;
  constructor(public loadingController: LoadingController) { }

  async present() {
    this.loading = await this.loadingController.create({});
    await this.loading.present();
  }

  dismiss(){
    this.loading.dismiss();
  }
}
