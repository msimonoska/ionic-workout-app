import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storage_object: any = {
    profile: {
      first_name: '',
      last_name: '',
      weight: 0,
      height: 0,
      activity_level: 0,
      brm: 0,
      bmi: 0,
      gender:'',
      age:0,
      calorieIntake: 0
    },
    workout:{
      active_day: 1,
      level:''
    },
    food_diary:{
      breakfast:[],
      lunch:[],
      dinner:[],
      snacks:[],
      water_intake:[]
    },
    images:[]

  };

  constructor(private storage: Storage) {
  }

  updateStorageObject() {
    this.storage.set('wokout_app_storage', this.storage_object);
  }

  getStorageObject() {

    return new Promise(resolve => {
      this.storage.get('wokout_app_storage').then((val) => {
        if (val) {

          this.storage_object = val;
        } else {
          this.resetStorageObject();
        }

        console.log(this.storage_object)
        resolve(true);
      });
    })

  }

  resetStorageObject() {
    this.storage_object = {
      profile:{
        first_name: '',
        last_name: '',
        weight: 0,
        height: 0,
        activity_level: 0,
        brm: 0,
        bmi: 0,
        gender:'',
        age:0,
        calorieIntake: 0
      },
      workout:{
        active_day: 1,
        level:''
      },
      food_diary:{
        breakfast:[],
        lunch:[],
        dinner:[],
        snacks:[],
        water_intake:[]
      },
      images:[]

    };
    this.updateStorageObject();
  }

  set(key:string, value:any) {
    this.storage_object[key] = value;
    this.updateStorageObject();
  }

  get(key:string) {
    return this.storage_object[key];
  }
}
