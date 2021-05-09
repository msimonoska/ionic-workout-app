import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {StorageService} from './services/storage/storage.service';
import {ProfileService} from './services/profile/profile.service';
import {FoodDiaryService} from './services/food-diary/food-diary.service';
import {ImageService} from './services/image/image.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(private storageService: StorageService,
              private profileService: ProfileService,
              private foodDiaryService: FoodDiaryService,
              private imageService: ImageService) {

    this.storageService.getStorageObject().then(()=>{

      this.profileService.initProfile();
      this.foodDiaryService.initFoodDiary();
      this.imageService.initImages();
    });
  }
}
