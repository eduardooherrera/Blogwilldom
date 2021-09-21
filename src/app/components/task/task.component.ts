import { Component, OnInit, Input } from '@angular/core';

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
    public taskService: TaskService
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
    if(confirm('Estas seguro de eliminar ?')){
       this.taskService.deletePost(post);
    }
  }

}
