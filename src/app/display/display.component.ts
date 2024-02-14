import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../models/post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  
  posts: any[];
  constructor(private router:Router,private postService:PostService){
    this.posts=postService.postList;
    this.addnewdata();
  }

  addnewdata(){
    let newdata :Post={
      id:6,
      postLmist:'post7'
    }
    this.postService.addpost(newdata);
  }

}

