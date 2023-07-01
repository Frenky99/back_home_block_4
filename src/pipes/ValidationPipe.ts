// мы создали файлик, куда передали из документации pipe с валидацией
// Pipe — это класс, аннотированный декоратором @Injectable(), который реализует интерфейс PipeTransform.
// нам приходит запрос, и перед обработкой запроса к определенному контроллеру, данные обрабатываются с помощью pipe по порядку, два метода
// с помощью трансформации - когда мы преобразовываем входные данные в какую-либо форму(привести типы сроковое к числовому)
// валидация - получаем данные и на основе определенной схемы (типом данных, регулярным выражением и т.п.), мы решаем корректно или нет

import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { ObjectSchema } from 'joi';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}

  transform(value: any, metadata: ArgumentMetadata) {
    const { error } = this.schema.validate(value);
    if (error) {
      throw new BadRequestException(error.details[0].message);
    }
    return value;
  }
}