import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
@Injectable()
export class ParseUuuidpipePipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    return value;
  }
}
