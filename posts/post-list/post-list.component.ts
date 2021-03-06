import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Post } from '../post';
import { PostService } from '../post.service';
import { PauthService } from 'src/app/auth/pauth.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: Observable<Post[]>

  constructor(private postService: PostService, public auth: PauthService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts()
    console.log(this)
  }

  delete(id: string){
    this.postService.delete(id);
  }

}
