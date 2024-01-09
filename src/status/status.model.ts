import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Todo } from 'src/todo/todo.model';

@ObjectType()
export class Status {
  @Field(() => ID, { nullable: false })
  id: number;

  @Field({ nullable: false })
  title: string;

  @Field(() => [Todo], { nullable: 'items' })
  todos?: Todo[]
}