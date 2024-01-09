import { Module, forwardRef } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoResolver } from './todo.resolver';
import { StatusModule } from 'src/status/status.module';
import { FolderModule } from 'src/folder/folder.module';

@Module({
  providers: [TodoService, TodoResolver],
  imports: [forwardRef(() => StatusModule), forwardRef(() => FolderModule)],
  exports: [TodoService]
})
export class TodoModule {}
