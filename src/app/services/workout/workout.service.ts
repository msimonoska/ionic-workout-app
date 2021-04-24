import {Injectable} from '@angular/core';
import {StorageService} from '../storage/storage.service';
import {ExercisesService} from '../exercises/exercises.service';
import {AlertService} from '../alert/alert.service';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  get workout() {
    return this._workout;
  }


  private _workout = {
    active_day: 1,
    level: ''
  };

  constructor(private storageService: StorageService, private exercisesService: ExercisesService, private alert: AlertService) {
  }

  setLevel(level) {
    this._workout.level = level;
    this.storageService.set('workout', this._workout);
  }

  updateActiveDay(value) {
    if(value==this.exercisesService.getExercises(this.workout.level).length+1){
      // alert

      this.alert.presentAlert({
        message:`You successfully finished your ${this.workout.level} workout level!`,
        buttons:['OK']
      })
      // reset level days to not finished
      this.exercisesService.resetLevelDays(this.workout.level);

      // level -> ''
      this.workout.level = '';
      // active_day -> 1
      this.workout.active_day = 1;

      this.storageService.set('workout', this._workout);


    }
    else{
      this._workout.active_day = value;
      this.exercisesService.finishDay(value - 1, this.workout.level);
      this.storageService.set('workout', this._workout);
    }

  }

  initWorkout() {
    this._workout = this.storageService.get('workout');
    if (this.workout.level != '') {
      this.exercisesService.checkDays(this.workout.level, this.workout.active_day);
    }
  }

  get days() {
    return this.exercisesService.getExercises(this.workout.level);

  }
}
