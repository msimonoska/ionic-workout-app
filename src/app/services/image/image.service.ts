import {Injectable} from '@angular/core';
import {StorageService} from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  get images(): any {
    return this._images;
  }

  set images(value: any) {
    this._images = value;
  }

  private _images: any = [];

  constructor(private storageService: StorageService) {
  }

  add_image(data) {
    this._images.push({
      image: data,
      date: new Date()
    });

    this.update_images();
  }

  remove_image(index) {
    this._images.splice(index, 1);
    this.update_images();
  }

  initImages() {
    this._images = this.storageService.get('images');
  }

  update_images() {
    this.storageService.set('images', this._images);
  }
}
