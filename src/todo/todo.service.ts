import { Injectable } from '@nestjs/common';
import { todoList, statusList } from 'src/_db';
import { AddTodoInput } from './inputs/add-todo.input';

@Injectable()
export class TodoService {
  async findAll() {
    return todoList;
  }

  async findOne(id: number) {
    const todo = todoList.find((todo) => todo.id === id);
    if (todo) return todo;
    else throw new Error('Todo does not exist');
  }

  async addTodo(addTodoInput: AddTodoInput) {
    const id = Math.round(Math.random() * 10_000);
    todoList.push({ id, statusId: statusList[0].id, ...addTodoInput });
    return todoList.find((todo) => todo.id === id);
  }

  async changeTodoStatus(todoId: number, statusId: number) {
    const todo = todoList.find((todo) => todo.id === todoId);
    const todoIndex = todoList.findIndex((todo) => todo.id === todoId);
    todoList.splice(todoIndex, 1);
    const newTodo = { ...todo, statusId };
    todoList.push(newTodo);
    return newTodo;
  }
}
