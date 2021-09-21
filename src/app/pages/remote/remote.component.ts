import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/task';
import { RemoteService } from 'src/app/service/remote.service';

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css']
})
export class RemoteComponent implements OnInit {

  posts: Post[];

  constructor(
    private remoteService: RemoteService
  ) { 

    this.posts = [];

  }

  ngOnInit(): void {
    this.remoteService.getGNews().subscribe(resp => {
      const toDo = resp as Post[];
      console.log(resp);

      this.posts = toDo;
    });
  }

}
