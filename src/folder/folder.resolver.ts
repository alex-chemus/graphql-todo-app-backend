import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { FolderService } from './folder.service';
import { Folder } from './folder.model';
import { AddFolderInput } from './inputs/add-folder.input';
import { TodoService } from 'src/todo/todo.service';

@Resolver(() => Folder)
export class FolderResolver {
  constructor(
    private folderService: FolderService,
    private todoService: TodoService,
  ) {}

  @Query(() => [Folder])
  async folders() {
    return this.folderService.findAll();
  }

  @Query(() => Folder)
  async folder(@Args('id', { type: () => Int }) id: number) {
    try {
      return this.folderService.findOne(id);
    } catch (error) {
      console.log(error);
    }
  }

  @Mutation(() => Folder)
  async addFolder(@Args('addFolderInput') addFolderInput: AddFolderInput) {
    return this.folderService.addFolder(addFolderInput);
  }

  @ResolveField()
  async todos(@Parent() folder: Folder) {
    try {
      return (await this.todoService.findAll()).filter(
        (todo) => todo.folderId === folder.id,
      );
    } catch (error) {
      console.log(error);
    }
  }
}
