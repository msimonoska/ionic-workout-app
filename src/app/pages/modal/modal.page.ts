import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ExercisesService} from '../../services/exercises/exercises.service';
import {WorkoutService} from '../../services/workout/workout.service';
import {LoaderService} from '../../services/loader/loader.service';
import {ApiService} from '../../services/api/api.service';
import {AlertService} from '../../services/alert/alert.service';
import {ImageService} from '../../services/image/image.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input('title') title: any = '';
  @Input('day') day: number = 0;
  @Input('type') type: any = '';
  @Input('barcode') barcode: any = null;
  @Input('image') image: any = null;
  @Input('index') index: number = -1;

  constructor(
    private modalController: ModalController,
    private exercisesService: ExercisesService,
    private workoutService: WorkoutService,
    private loader: LoaderService,
    private apiService: ApiService,
    private alertService: AlertService,
    private imageService: ImageService
  ) {
  }

  exercises = [];
  currentIndex = 0;

  ngOnInit() {

  }

  ionViewWillEnter() {
    if (this.barcode && this.type == 'product') {
      this.getProductDetails();
    } else if(this.type!='image'){
      this.initExercises();
    }
    else{
      // this.title = new Date(this.image.date);
    }

    console.log("the title is",this.title)
  }


  dismiss() {
    this.modalController.dismiss();
  }

  initExercises() {
    this.exercises = this.exercisesService.getExercises(this.workoutService.workout.level)[this.day == 0 ? this.day : (this.day - 1)].exercises;
    console.log(this.exercises);
  }

  finishDayWorkout() {
    this.workoutService.updateActiveDay(this.day + 1);
    this.dismiss();
  }

  product: any = null;

  getProductDetails() {

    this.loader.present();
    this.apiService.get_product_information(this.barcode).subscribe((res: any) => {
      this.loader.dismiss();
      if (res.status == 0) {
        // show alert
        this.alertService.presentAlert({
          header: 'Info',
          message: 'Product not found',
          buttons: [{
            text: 'OK',
            handler: () => {
              this.dismiss();
            }
          }]
        });
      } else {
        console.log(res);

        let product = {
          image: res.product.image_url,
          name: res.product.generic_name ? res.product.generic_name : res.product.product_name,
          nutrients: {
            energy_cal_100g: res.product.nutriments['energy-kcal_100g'] ? res.product.nutriments['energy-kcal_100g'] : 0,
            fat_100g: res.product.nutriments['fat_100g'] ? res.product.nutriments['fat_100g'] : 0,
            proteins_100g: res.product.nutriments['proteins_100g'] ? res.product.nutriments['proteins_100g'] : 0,
            carbohydrates: res.product.nutriments['carbohydrates_100g'] ? res.product.nutriments['carbohydrates_100g'] : 0,
            fiber: res.product.nutriments['fiber_100g'] ? res.product.nutriments['fiber_100g'] : 0
          },
          taken_g: 0,
          taken_cal: 0
        };
        product.taken_cal = (product.nutrients.energy_cal_100g * product.taken_g) / 100;
        this.product = product;
        console.log(this.product);

        this.title = product.name;
      }

    }, error => {
      this.loader.dismiss();
      console.log(error);
    });
  }


  calculateCaloriesOnInput() {
    if (this.product) {
      this.product.taken_cal = (this.product.nutrients.energy_cal_100g * this.product.taken_g) / 100;
    }
  }

  addFood() {
    this.modalController.dismiss(this.product);
  }


  deleteImage(){
    this.imageService.remove_image(this.index);
    this.dismiss();
  }
}
