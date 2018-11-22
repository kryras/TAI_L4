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

  // blogEntry = [
  //   {
  //     imgUrl: 'https://angular.io/assets/images/logos/angular/shield-large.svg',
  //     entryText: '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae tempus nulla. Etiam quis diam eget leo congue aliquet. Duis risus est, ullamcorper ac malesuada eu, ornare fringilla ipsum. Duis facilisis rhoncus fermentum. Duis sit amet mauris ut erat pellentesque vulputate id id diam. Donec imperdiet accumsan quam non lacinia. Donec eleifend leo dolor, nec tempus tortor placerat eu. '
  //   },
  //   {
  //     imgUrl: 'https://vuejs.org/images/logo.png?_sw-precache=cf23526f451784ff137f161b8fe18d5a',
  //     entryText: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae tempus nulla. Etiam quis diam eget leo congue aliquet. Duis risus est, ullamcorper ac malesuada eu, ornare fringilla ipsum. Duis facilisis rhoncus fermentum. Duis sit amet mauris ut erat pellentesque vulputate id id diam. Donec imperdiet accumsan quam non lacinia. Donec eleifend leo dolor, nec tempus tortor placerat eu. '
  //   },
  //   {
  //     imgUrl: 'https://www.apcurium.com/wp-content/uploads/2016/05/reactNe-300x266.png',
  //     entryText: '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae tempus nulla. Etiam quis diam eget leo congue aliquet. Duis risus est, ullamcorper ac malesuada eu, ornare fringilla ipsum. Duis facilisis rhoncus fermentum. Duis sit amet mauris ut erat pellentesque vulputate id id diam. Donec imperdiet accumsan quam non lacinia. Donec eleifend leo dolor, nec tempus tortor placerat eu. '
  //   },
  //   {
  //     imgUrl: 'https://angular.io/assets/images/logos/angular/shield-large.svg',
  //     entryText: '4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae tempus nulla. Etiam quis diam eget leo congue aliquet. Duis risus est, ullamcorper ac malesuada eu, ornare fringilla ipsum. Duis facilisis rhoncus fermentum. Duis sit amet mauris ut erat pellentesque vulputate id id diam. Donec imperdiet accumsan quam non lacinia. Donec eleifend leo dolor, nec tempus tortor placerat eu. '
  //   },
  //   {
  //     imgUrl: 'https://vuejs.org/images/logo.png?_sw-precache=cf23526f451784ff137f161b8fe18d5a',
  //     entryText: '5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae tempus nulla. Etiam quis diam eget leo congue aliquet. Duis risus est, ullamcorper ac malesuada eu, ornare fringilla ipsum. Duis facilisis rhoncus fermentum. Duis sit amet mauris ut erat pellentesque vulputate id id diam. Donec imperdiet accumsan quam non lacinia. Donec eleifend leo dolor, nec tempus tortor placerat eu. '
  //   },
  //   {
  //     imgUrl: 'https://www.apcurium.com/wp-content/uploads/2016/05/reactNe-300x266.png',
  //     entryText: '6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae tempus nulla. Etiam quis diam eget leo congue aliquet. Duis risus est, ullamcorper ac malesuada eu, ornare fringilla ipsum. Duis facilisis rhoncus fermentum. Duis sit amet mauris ut erat pellentesque vulputate id id diam. Donec imperdiet accumsan quam non lacinia. Donec eleifend leo dolor, nec tempus tortor placerat eu. '
  //   },
  //   {
  //     imgUrl: 'https://angular.io/assets/images/logos/angular/shield-large.svg',
  //     entryText: '7 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae tempus nulla. Etiam quis diam eget leo congue aliquet. Duis risus est, ullamcorper ac malesuada eu, ornare fringilla ipsum. Duis facilisis rhoncus fermentum. Duis sit amet mauris ut erat pellentesque vulputate id id diam. Donec imperdiet accumsan quam non lacinia. Donec eleifend leo dolor, nec tempus tortor placerat eu. '
  //   },
  //   {
  //     imgUrl: 'https://vuejs.org/images/logo.png?_sw-precache=cf23526f451784ff137f161b8fe18d5a',
  //     entryText: '8 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae tempus nulla. Etiam quis diam eget leo congue aliquet. Duis risus est, ullamcorper ac malesuada eu, ornare fringilla ipsum. Duis facilisis rhoncus fermentum. Duis sit amet mauris ut erat pellentesque vulputate id id diam. Donec imperdiet accumsan quam non lacinia. Donec eleifend leo dolor, nec tempus tortor placerat eu. '
  //   },
  //   {
  //     imgUrl: 'https://www.apcurium.com/wp-content/uploads/2016/05/reactNe-300x266.png',
  //     entryText: '9 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae tempus nulla. Etiam quis diam eget leo congue aliquet. Duis risus est, ullamcorper ac malesuada eu, ornare fringilla ipsum. Duis facilisis rhoncus fermentum. Duis sit amet mauris ut erat pellentesque vulputate id id diam. Donec imperdiet accumsan quam non lacinia. Donec eleifend leo dolor, nec tempus tortor placerat eu. '
  //   },
  //   {
  //     imgUrl: 'https://angular.io/assets/images/logos/angular/shield-large.svg',
  //     entryText: '10 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae tempus nulla. Etiam quis diam eget leo congue aliquet. Duis risus est, ullamcorper ac malesuada eu, ornare fringilla ipsum. Duis facilisis rhoncus fermentum. Duis sit amet mauris ut erat pellentesque vulputate id id diam. Donec imperdiet accumsan quam non lacinia. Donec eleifend leo dolor, nec tempus tortor placerat eu. '
  //   }
  // ];

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
