import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ExercisesService} from '../../services/exercises/exercises.service';
import {WorkoutService} from '../../services/workout/workout.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input('title')  title:any = '';
  @Input('day')  day:any = 0;
  constructor(
    private modalController: ModalController,
    private exercisesService: ExercisesService,
    private workoutService: WorkoutService
  ) { }

  exercises = [];
  currentIndex = 0;
  ngOnInit() {
    this.initExercises()
  }


  dismiss(){
    this.modalController.dismiss();
  }

  initExercises(){
    this.exercises = this.exercisesService.getExercises(this.workoutService.workout.level)[this.day==0?this.day:(this.day-1)].exercises;
    console.log(this.exercises)
  }

  finishDayWorkout(){
    this.workoutService.updateActiveDay(this.day+1);
    this.dismiss();
  }


}
