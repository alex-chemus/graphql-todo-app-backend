import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Folder } from "src/folder/folder.model";
import { Status } from "src/status/status.model";

@ObjectType()
export class Todo {
  @Field(() => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  text: string;

  // for inner use
  statusId?: number;
  folderId?: number;

  @Field(() => Status)
  status?: Status;

  @Field(() => Folder)
  folder?: Folder;
}