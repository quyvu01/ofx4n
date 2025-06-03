import { Module } from '@nestjs/common';
import { DataMappableService } from '@app/ofx-core/implementations/dataMappableService';
import { IDataMappableService } from '@app/ofx-core/abstractions/dataMappableService.interface';
import { SendPipelinesOrchestrator } from './implementations/sendPipelinesOrchestrator';
import { DefaultMappableRequestHandler, IMappableRequestHandler } from './abstractions/mappableRequestHandler.interface';

@Module({
  providers: [
    SendPipelinesOrchestrator,
    {
      provide: IDataMappableService,
      useClass: DataMappableService,
    },
    {
      provide: IMappableRequestHandler,
      useClass: DefaultMappableRequestHandler
    }
  ],
  exports: [IDataMappableService],
})
export class OfxCoreModule {}
