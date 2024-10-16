import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

const httpsOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor() {}

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  http = inject(HttpClient);

  getPosts() {
    return this.http.get<any>(this.apiUrl).pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.log(error);
    return throwError(() => new Error('An error occurred'));
  }

  getPost(id: number) {
    return this.http.get(this.apiUrl + '/' + id);
  }

  createPost(post: any) {
    return this.http.post(this.apiUrl, post, httpsOptions);
  }

  updatePost(post: any) {
    return this.http.put(this.apiUrl + '/' + post.id, post);
  }

  deletePost(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  getPostsByParams(userId: number) {
    let params = new HttpParams().set('userId', userId);
    return this.http.get(this.apiUrl, { params });
  }
}
