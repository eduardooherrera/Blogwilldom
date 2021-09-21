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


  constructor(
    public taskService: TaskService,
  ) { 
    this.posts = [];
  }
  
  ngOnInit(): void {
    this.posts = this.taskService.getPosts();
  }

}
