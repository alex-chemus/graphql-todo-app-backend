import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Todo } from 'src/todo/todo.model';

@ObjectType()
export class Folder {
  @Field(() => ID)
  id: number;

  @Field()
  title: string;

  @Field(() => [Todo], { nullable: 'items' })
  todos?: Todo[];
}
