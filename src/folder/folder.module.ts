import { Module, forwardRef } from '@nestjs/common';
import { FolderService } from './folder.service';
import { FolderResolver } from './folder.resolver';
import { TodoModule } from 'src/todo/todo.module';

@Module({
  providers: [FolderService, FolderResolver],
  exports: [FolderService],
  imports: [forwardRef(() => TodoModule)]
})
export class FolderModule {}
