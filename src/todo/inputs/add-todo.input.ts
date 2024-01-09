import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class AddTodoInput {
  @Field()
  title: string;

  @Field()
  text: string;

  @Field(() => Int)
  folderId: number;
}
