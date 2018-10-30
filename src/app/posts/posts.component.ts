import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public postsList: any[] = [];
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getPosts().subscribe((res) => {
      console.log(res);
      this.postsList = res;
    });
  }

  addPost() {
    this.appService.addPosts().subscribe((response) => {
      console.log(response);
    });
  }

  updatePost() {
    this.appService.updatePost().subscribe((response) => {
      console.log(response);
    });
  }

  deletePost() {
    this.appService.deletePost().subscribe((response) => {
      console.log(response);
    });
  }

}
