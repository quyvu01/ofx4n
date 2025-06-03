import { Module } from '@nestjs/common';
import { OfxCoreService } from './ofx-core.service';

@Module({
  providers: [OfxCoreService],
  exports: [OfxCoreService],
})
export class OfxCoreModule {}
