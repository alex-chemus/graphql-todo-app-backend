import { Args, Int, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Status } from './status.model';
import { StatusService } from './status.service';
import { TodoService } from 'src/todo/todo.service';

@Resolver(() => Status)
export class StatusResolver {
  constructor(
    private statusService: StatusService,
    private todoService: TodoService
  ) {}

  @Query(() => [Status])
  async statusList() {
    return await this.statusService.findAll();
  }

  @Query(() => Status)
  async status(@Args('id', { type: () => Int }) id: number) {
    try {
      return this.statusService.findOne(id)
    } catch (error) {
      console.log(error)
    }
  }

  @ResolveField()
  async todos(@Parent() status: Status) {
    try {
      return (await this.todoService.findAll()).filter(todo => todo.statusId === status.id)
    } catch (error) {
      console.log(error)
    }
  }
}
