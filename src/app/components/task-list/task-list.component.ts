import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Post } from '../../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  posts: Post[];
  postsTotal: Post[];
  last: number = 0;
  
  constructor(
    public taskService: TaskService,
  ) { 
    this.posts = [];
    this.postsTotal = [];
  }
  
  ngOnInit(): void {

    this.postsTotal = this.taskService.getPosts();

    this.posts = this.postsTotal.slice(0, 10);
    this.last = 10;
  }


  addPostsPage() {
    let limit = this.postsTotal.length;
    if(this.last < limit)
    {
      const postsNews = this.postsTotal.slice(this.last + 1, this.last + 11);
      this.posts = this.posts.concat(postsNews);
      console.log(this.posts.length);
      this.last += 10;
    }
  }
  onScrollDown(): void {
    this.addPostsPage();
    console.log('Down..!!!');
  }



}
