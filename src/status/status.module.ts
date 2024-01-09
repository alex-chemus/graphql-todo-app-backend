import { Module, forwardRef } from '@nestjs/common';
import { StatusResolver } from './status.resolver';
import { StatusService } from './status.service';
import { TodoModule } from 'src/todo/todo.module';

@Module({
  providers: [StatusResolver, StatusService],
  exports: [StatusService],
  imports: [forwardRef(() => TodoModule)]
})
export class StatusModule {}
