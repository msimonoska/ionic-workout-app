import { Injectable } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Injectable({
  providedIn: 'root'
})
export class BarcodeService {

  constructor(private barcodeScanner: BarcodeScanner) { }

  scanner(){
    return new Promise((resolve, reject)=>{
      this.barcodeScanner.scan().then(barcodeData => {
        console.log('Barcode data', barcodeData);
        resolve(barcodeData.text);
      }).catch(err => {
        console.log('Error', err);
        reject(err);
      });
    })

  }
}
