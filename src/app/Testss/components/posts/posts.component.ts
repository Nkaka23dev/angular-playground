import { Component, inject, OnInit } from '@angular/core';
import { Posts } from '../models/post';
import { PostsService } from '../posts.service';

@Component({
  standalone: true,
  selector: 'app-posts',
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent implements OnInit {
  posts!: Posts[];
  private postService = inject(PostsService);
  ngOnInit(): void {
    this.getPosts();
  }
  getPosts() {
    this.postService.getPosts().subscribe({
      next: data => {
        console.log(data, 'data received');
        this.posts = data;
      },
    });
  }
  deletePost(post: Posts) {
    this.posts = this.posts.filter(p => p.id != post.id);
    this.postService.deletePost(post).subscribe(res => console.log('deleted', res));
  }
}
