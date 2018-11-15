import {Component, Input, OnInit} from '@angular/core';
import {BlogDataService} from "../../../services/blog-data.service";


@Component({
  selector: 'app-blog-item-detail',
  templateUrl: './blog-item-detail.component.html',
  styleUrls: ['./blog-item-detail.component.css']
})
export class BlogItemDetailComponent implements OnInit {

  imageUrl : string;
  text : string;
  constructor(private blogData: BlogDataService) { }

  ngOnInit() {
    this.blogData.currentImage.subscribe(image => this.imageUrl = image);
    this.blogData.currentText.subscribe(text => this.text = text);
  }

}
