import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProfileService} from '../../services/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder, public profileService: ProfileService) {
    this.profileService.initProfile();
    console.log(this.profileService.profile);

    this.form = this.formBuilder.group({
      first_name:[this.profileService.profile.first_name, Validators.compose([Validators.required])],
      last_name:[this.profileService.profile.last_name, Validators.compose([Validators.required])],
      weight:[this.profileService.profile.weight, Validators.compose([Validators.required])],
      age:[this.profileService.profile.age, Validators.compose([Validators.required])],
      height:[this.profileService.profile.height, Validators.compose([Validators.required])],
      gender:[this.profileService.profile.gender, Validators.compose([Validators.required])],
      activity_level:[this.profileService.profile.activity_level, Validators.compose([Validators.required])],
    });

  }

  ngOnInit() {
  }

  saveClicked: boolean= false;
  saveForm(){
    this.saveClicked = true;
    if(this.form.valid){
      console.log(this.form.value)
      this.profileService.profile = this.form.value;
      this.profileService.calculateCalorieIntake();
    }
  }

}
