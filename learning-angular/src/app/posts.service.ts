import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor() {}

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  http = inject(HttpClient);

  getPosts() {
    return this.http.get<any>(this.apiUrl);
  }

  getPost(id: number) {
    return this.http.get(this.apiUrl + '/' + id);
  }

  createPost(post: any) {
    return this.http.post(this.apiUrl, post);
  }

  updatePost(post: any) {
    return this.http.put(this.apiUrl + '/' + post.id, post);
  }

  deletePost(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
