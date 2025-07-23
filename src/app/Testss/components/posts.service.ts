import { HttpClient } from '@angular/common/http';
import { Injectable, Pipe } from '@angular/core';
import { Posts } from './models/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private httpClient: HttpClient) {}
  getPosts() {
    return this.httpClient.get<Posts[]>('https://jsonplaceholder.typicode.com/posts');
  }
  deletePost(post: Posts) {
    return this.httpClient.delete<Posts[]>(`https://jsonplaceholder.typicode.com/posts/${post.id}`);
  }
}
