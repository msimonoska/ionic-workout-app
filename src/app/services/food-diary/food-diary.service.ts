import {Injectable} from '@angular/core';
import {StorageService} from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class FoodDiaryService {


  private _breakfast: any = [];
  private _lunch: any = [];
  private _dinner: any = [];
  private _snacks: any = [];
  private _water_intake: any = [];

  constructor(private storageService: StorageService) {
  }


  get water_intake() {
    return this._water_intake;
  }

  set water_intake(value) {
    this._water_intake = value;
  }

  get snacks() {
    return this._snacks;
  }

  set snacks(value) {
    this._snacks = value;
  }

  get dinner() {
    return this._dinner;
  }

  set dinner(value) {
    this._dinner = value;
  }

  get breakfast() {
    return this._breakfast;
  }

  set breakfast(value) {
    this._breakfast = value;
  }

  get lunch() {
    return this._lunch;
  }

  set lunch(value) {
    this._lunch = value;
  }

  // sekogas type ke e breakfast, lunch, dinner, snacks ili water_intake
  /**
   * Add item to array
   * @param type
   * @param product
   * {
   *    image:string,
   *    name: string,
   *    nutrients: object,
   *    taken_g: number,
   *    taken_cal: number
   * }
   */
  add_product_to(type, product) {
    if (type == 'breakfast') {
      this.breakfast.push(product);
    } else if (type == 'lunch') {
      this.lunch.push(product);
    } else if (type == 'dinner') {
      this.dinner.push(product);
    } else if (type == 'snacks') {
      this.snacks.push(product);
    } else if (type == 'water_inatke') {
      this.water_intake.push(product);
    }
    // this[type].push(product)

    this.update_food_diary();
  }

  remove_product_from(type, index) {
    this[type].splice(index, 1);
    console.log(this[type]);
    this.update_food_diary();
  }

  update_food_diary() {
    this.storageService.set('food_diary', {
      breakfast: this.breakfast,
      lunch: this.lunch,
      dinner: this.dinner,
      snacks: this.snacks,
      water_intake: this.water_intake
    });
  }

  get_cal_intake() {
    let sum = 0;
    for (let i = 0; i < this.breakfast.length; i++) {
        sum += this.breakfast[i].taken_cal;
    }
    for (let i = 0; i < this.lunch.length; i++) {
      sum += this.lunch[i].taken_cal;
    }
    for (let i = 0; i < this.dinner.length; i++) {
      sum += this.dinner[i].taken_cal;
    }
    for (let i = 0; i < this.snacks.length; i++) {
      sum += this.snacks[i].taken_cal;
    }
    return sum;
  }


  initFoodDiary() {
    let fd = this.storageService.get('food_diary');
    console.log("INIT FOOD DIARY", fd)
    this.breakfast = fd.breakfast;
    this.lunch = fd.lunch;
    this.dinner = fd.dinner;
    this.snacks = fd.snacks;
    this.water_intake = fd.water_intake;
  }

}
