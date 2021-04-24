import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private base_url = "https://world.openfoodfacts.org/api/v0/product"
  constructor(private http: HttpClient) { }

  get_product_information(barcode){
    return this.http.get(`${this.base_url}/${barcode}`);
  }

}
