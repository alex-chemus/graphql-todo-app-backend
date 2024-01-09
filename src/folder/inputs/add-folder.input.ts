import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AddFolderInput {
  @Field({ nullable: false })
  title: string;
}
