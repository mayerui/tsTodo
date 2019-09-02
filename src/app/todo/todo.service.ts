import { Injectable } from '@angular/core';
import { Todo } from './todo.module';
import { UUID } from 'angular2-uuid';

@Injectable()
export class TodoService {
    todos: Todo[] = [];

    constructor() { }

    addTodo(todoItem: string): Todo[] {
        const todo = {
            id: UUID.UUID(),
            desc: todoItem,
            completed: false
        };
        this.todos.push(todo);
        return this.todos;
    }

    toggleTodoComplete(todo: Todo) {
        this.todos.filter(todoitem => todoitem.id === todo.id)
            .pop().completed = !todo.completed;
    }

    removeTodo(todo: Todo) {
        this.todos = this.todos.filter(todoitem => todoitem.id !== todo.id);
        return this.todos;
    }
}
