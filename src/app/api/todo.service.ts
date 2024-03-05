import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TodoModel} from '../providers/todos.states'
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiRoot = environment.apiRoot;

  constructor(private http: HttpClient) {
  }

  getTodos(): Observable<TodoModel[]> {
    return this.http.get<TodoModel[]>(`${this.apiRoot}/todos`);
  }

//   likePhoto(id: string): Observable<Photo> {
//     return this.http.put<Photo>(`${this.apiRoot}/photos/${id}/like`, null);
//   }

//   dislikePhoto(id: string): Observable<Photo> {
//     return this.http.put<Photo>(`${this.apiRoot}/photos/${id}/dislike`, null);
//   }
}