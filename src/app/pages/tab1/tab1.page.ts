import { Component } from '@angular/core';
import {WorkoutService} from '../../services/workout/workout.service';
import {ModalPage} from '../modal/modal.page';
import {ModalController} from '@ionic/angular';
import {AlertService} from '../../services/alert/alert.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  level = 'light';
  constructor(public workoutService: WorkoutService, private modalController: ModalController, private alertService:AlertService) {
    this.workoutService.initWorkout();
    console.log(this.workoutService.workout)
    console.log(this.workoutService.days)
  }

  setLevel(){
    console.log(this.level)
    this.workoutService.setLevel(this.level);
  }


  async presentModal(day) {
    console.log(day)
    if(day>this.workoutService.workout.active_day){
      this.alertService.presentAlert({
        message: 'This day is locked.',
        buttons: ['OK']
      })
    }
    else if(day==this.workoutService.workout.active_day){
      const modal = await this.modalController.create({
        component: ModalPage,
        componentProps: {
          title:"Workout",
          day: day
        }
      });
      return await modal.present();
    }

  }
}
