import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../../services/data.service";


@Component({
  selector: 'app-blog-item-detail',
  templateUrl: './blog-item-detail.component.html',
  styleUrls: ['./blog-item-detail.component.css']
})
export class BlogItemDetailComponent implements OnInit {

  blogPost: Object;
  postId: string;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.route.paramMap.subscribe(params => {
      this.postId = params.get("id");
    });
  }

  ngOnInit() {
    this.dataService.get(parseInt(this.postId, 10) + 1).subscribe(result => {
      this.blogPost = result;
    });
  }
}
