import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router'
import { Post } from 'src/app/models/task';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() post: Post;

  constructor(
    public taskService: TaskService,
    public router: Router
  ) { 
    this.post = {
      title: '',
      description: '',
      hide: true,
      img: ''
    }
  }

  ngOnInit(): void {
  }

  deletePost(post: Post) {
    console.log(this.router.url);
    if(confirm('Estas seguro de eliminar ?')){
      this.taskService.deletePost(post);
      window.location.reload();

    }
  }

}
