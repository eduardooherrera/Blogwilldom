import { Injectable } from '@angular/core';
import { Post } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  posts: Post[];

  constructor() { 
    this.posts = [
      // {title: 'Title', description: 'I have a description', hide:true },
      // {title: 'Website', description: 'I have to create website', hide:true},
      // {title: 'Publish', description: 'I have a published app', hide:true},
    ];
  }

  getPosts() {
    if(localStorage.getItem('Post') === null)
    {
      return this.posts;
    } else {
      this.posts = JSON.parse(localStorage.getItem('Post') || '{}');
      return this.posts;

    } 
  }

  addPost(post: Post) {
    this.posts.push(post);
    let _posts = []

    if(localStorage.getItem('Post') === null ){
      _posts.push(post);
      localStorage.setItem('Post', JSON.stringify(_posts));
    } else {
      _posts = JSON.parse(localStorage.getItem('Post')  || '{}');
      _posts.push(post);
      localStorage.setItem('Post', JSON.stringify(_posts));
    }

  }

  deletePost(post: Post) {
    for(let i = 0; i < this.posts.length; i++) {
      if(post == this.posts[i]) {
        this.posts.splice(i, 1);
        localStorage.setItem('Post', JSON.stringify(this.posts));
      }
    }
  }
}
