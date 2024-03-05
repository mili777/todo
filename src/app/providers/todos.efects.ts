import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {TodoService} from '../api/todo.service';
import {Injectable} from '@angular/core';
import { catchError, map, of, switchMap } from 'rxjs';
import { loadTodos, loadTodosError, loadTodosSuccess } from './todos.actions';

@Injectable()
export class TodoEffects {

    loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      switchMap(() => this.todoService.getTodos().pipe(
        map(todos => loadTodosSuccess({todos})),
        catchError(() => of(loadTodosError()))
      ))
    )
    
  );

  

  constructor(
    private actions$: Actions, // this is an RxJS stream of all actions
    private todoService: TodoService // we will need this service for API calls
  ) {}
}