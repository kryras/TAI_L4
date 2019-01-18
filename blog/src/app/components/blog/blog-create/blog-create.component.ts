import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../../../services/data.service";
import {HttpEventType} from "@angular/common/http";

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  postData = {
    title: '',
    description: '',
    image: ''
  }

  ngOnInit() {
  }

  createPost() {
    console.log("Utworzenie postu", this.postData);
    this.dataService.createPost(this.postData).subscribe(response  => {
      let postObj:any = response;
      console.log(response);
      // this.router.navigate(['/blog/detail/', postObj.id]);
    }, error => {
      console.log(error);
    });

  }
}
