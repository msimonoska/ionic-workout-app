import {Injectable} from '@angular/core';
import {StorageService} from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private _profile = {
    first_name: '',
    last_name: '',
    weight: 0,
    height: 0,
    activity_level: 0,
    gender: '',
    bmr: 0,
    bmi: 0,
    age: 0,
    calorieIntake: 0
  };

  //   Women: BMR = 655 + ( 9.6 x weight in kilos ) + ( 1.8 x height in cm ) - ( 4.7 x age in years )
  //   Men: BMR = 66 + ( 13.7 x weight in kilos ) + ( 5 x height in cm ) - ( 6.8 x age in years)
  /**
   *
   To determine your total daily calorie needs, multiply your BMR by the appropriate
   activity factor, as follows:
   1. If you are sedentary (little or no exercise) : Calorie-Calculation = BMR x 1.2
   2. If you are lightly active (light exercise/sports 1-3 days/week) : CalorieCalculation = BMR x 1.375
   3. If you are moderatetely active (moderate exercise/sports 3-5 days/week) :
   Calorie-Calculation = BMR x 1.55
   4. If you are very active (hard exercise/sports 6-7 days a week) : CalorieCalculation = BMR x 1.725
   5. If you are extra active (very hard exercise/sports & physical job or 2x training) :
   Calorie-Calculation = BMR x 1.9
   */


  // BMI = ( Weight in Kilograms / ( Height in Meters ) x ( Height in Meters ) )
  /**
   * BMI Classification
   18.5 or less Underweight
   18.5 to 24.99 Normal Weight
   25 to 29.99 Overweight
   30 to 34.99 Obesity (Class 1)
   35 to 39.99 Obesity (Class 2)
   40 or greater Morbid Obesity
   */

  constructor(private storageService: StorageService) {
  }

  get profile() {
    return this._profile;
  }


  set profile(value) {
    this._profile = value;
    this.storageService.set('profile', this._profile);
  }

  initProfile() {
    this._profile = this.storageService.get('profile');
  }


  calculateBMR() {
    if (this.profile.gender == 'f') {
      return 655 + (9.6 * this.profile.weight) + (1.8 * this.profile.height) - (4.7 * this.profile.age);
    } else if (this.profile.gender == 'm') {
      return 66 + (13.7 * this.profile.weight) + (5 * this.profile.height) - (6.8 * this.profile.age);
    }
  }

  calculateBMI() {
    return this.profile.weight / ((this.profile.height / 100) * (this.profile.height / 100));
  }

  calculateCalorieIntake() {
    let bmr = this.calculateBMR();
    let bmi = this.calculateBMI();
    this.profile.bmr = bmr;
    this.profile.bmi = bmi;
    switch (parseInt(this.profile.activity_level.toString())) {
      case 0:
        this.profile.calorieIntake = bmr * 1.2;
        break;
      case 1:
        this.profile.calorieIntake = bmr * 1.375;
        break;
      case 2:
        this.profile.calorieIntake = bmr * 1.55;
        break;
      case 3:
        this.profile.calorieIntake = bmr * 1.725;
        break;
      case 4:
        this.profile.calorieIntake = bmr * 1.9;
        break;
    }

    this.storageService.set('profile', this.profile);
  }


  get bmi() {
    if (this.profile.bmi < 18.5) {
      return 'Underweight';
    } else if (this.profile.bmi >= 18.5 && this.profile.bmi <= 24.99) {
      return 'Normal weight';
    } else if (this.profile.bmi >= 25 && this.profile.bmi <= 29.99) {
      return 'Overweight';
    } else if (this.profile.bmi >= 30 && this.profile.bmi <= 24.99) {
      return 'Obesity (Class 1)';
    } else if (this.profile.bmi >= 35 && this.profile.bmi <= 39.99) {
      return 'Obesity (Class 2)';
    } else {
      return 'Obesity (Class 3) ';
    }
  }

}
