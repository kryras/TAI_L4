import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../services/data.service";
import {BlogDataService} from "../../services/blog-data.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  items: any;
  @Input('filterText') filterText: string;

  constructor(private dataService: DataService, private blogData: BlogDataService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.dataService.getAll().subscribe(result => {
      this.items = result;
    });
    this.route.queryParams.subscribe(params => {
      this.filterText = params['title'];
    });

  }

  showBlogEntry(img, txt, id) {
    this.blogData.blogImageSource(img);
    this.blogData.blogTextSource(txt);
    this.router.navigate(['/blog/detail/', id]);
  }

  // setQuery() {
  //     this.router.navigate(['/blog'],
  //       {queryParams: {title: this.filterText }});
  // }
}
