import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  constructor() {
  }

  private entryImage = new BehaviorSubject('...');
  private entryText = new BehaviorSubject('...');

  currentImage = this.entryImage.asObservable();
  currentText = this.entryText.asObservable();

  blogImageSource(image: string) {
    this.entryImage.next(image);
  }

  blogTextSource(text: string) {
    this.entryText.next(text);
  }
}
