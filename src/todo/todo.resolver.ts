import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';
import { AddTodoInput } from './inputs/add-todo.input';
import { StatusService } from 'src/status/status.service';
import { FolderService } from 'src/folder/folder.service';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(
    private todoService: TodoService,
    private statusService: StatusService,
    private folderService: FolderService,
  ) {}

  @Query(() => [Todo])
  async todos() {
    return this.todoService.findAll();
  }

  @Query(() => Todo)
  async todo(@Args('id', { type: () => Int }) id: number) {
    try {
      return this.todoService.findOne(id);
    } catch (err) {
      console.log(err);
    }
  }

  @Mutation(() => Todo)
  addTodo(@Args('addTodoInput') addTodoInput: AddTodoInput) {
    return this.todoService.addTodo(addTodoInput);
  }

  @Mutation(() => Todo)
  changeTodoStatus(
    @Args('todoId', { type: () => Int }) todoId: number,
    @Args('statusId', { type: () => Int }) statusId: number,
  ) {
    return this.todoService.changeTodoStatus(todoId, statusId);
  }

  @ResolveField()
  async status(@Parent() todo: Todo) {
    try {
      return this.statusService.findOne(todo.statusId);
    } catch (error) {
      console.log(error);
    }
  }

  @ResolveField()
  async folder(@Parent() todo: Todo) {
    try {
      return this.folderService.findOne(todo.folderId);
    } catch (error) {
      console.log(error);
    }
  }
}
