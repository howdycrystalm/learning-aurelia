import {Todo} from './todo';

export class App {
  constructor() {
    this.heading = 'Todos';
    this.todos = []; //track list of todos in an array
    this.todoDescription = ''; //captures users description as they type before they hit enter
  }
  //our app needs to do two things, add a todo, and remove a todo
  addTodo() {
    if (this.todoDescription) { //make sure we have the description when we add
      this.todos.push(new Todo(this.todoDescription)); //if we have the description, we want to push the todo in the array
      this.todoDescription = ''; //removes the old description from field so user can have empty space to add new desc.
    }
  }

  removeTodo(todo) { //need to know which todo to remove
    let index = this.todos.indexOf(todo);
    if (index !== -1 ) { //this means we found the element in the array.
      this.todos.splice(index, 1); //removes the todo from our array.
    }
  }
}
