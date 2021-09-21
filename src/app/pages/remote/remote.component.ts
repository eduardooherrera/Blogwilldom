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
  postsTotal: Post[];
  last: number = 0;

  constructor(
    private remoteService: RemoteService
  ) { 

    this.posts = [];
    this.postsTotal = [];

  }

  ngOnInit(): void {
    this.remoteService.getGNews().subscribe(resp => {
      const toDo = resp as Post[];
      this.postsTotal = toDo;
      this.posts = this.postsTotal.slice(0, 10);
    });
  }

  addPostsPage() {
    let limit = this.postsTotal.length;
    if(this.last < limit)
    {
      const postsNews = this.posts.slice(this.last + 1, this.last + 11);
      this.posts = this.posts.concat(postsNews);
      console.log(this.posts.length);
    }
  }

  onScrollDown(): void {
    this.addPostsPage();
    console.log('Down..!!!');
  }

}
