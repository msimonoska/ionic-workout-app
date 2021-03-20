import {Injectable} from '@angular/core';
import {StorageService} from '../storage/storage.service';
import {ExercisesService} from '../exercises/exercises.service';

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

  constructor(private storageService: StorageService, private exercisesService: ExercisesService) {
  }

  setLevel(level) {
    this._workout.level = level;
    this.storageService.set('workout', this._workout);
  }

  updateActiveDay(value) {
    this._workout.active_day = value;
    this.exercisesService.finishDay(value-1,this.workout.level)
    this.storageService.set('workout', this._workout);
  }

  initWorkout() {
    this._workout = this.storageService.get('workout');
    this.exercisesService.checkDays(this.workout.level, this.workout.active_day);
  }

  get days() {
    return this.exercisesService.getExercises(this.workout.level);

  }
}
