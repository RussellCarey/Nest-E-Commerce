import {
  ArgumentMetadata,
  BadGatewayException,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

/** Convert a string like "name asc, address desc" to { name: "asc", address: "desc" } */
@Injectable()
export class OrderByPipe implements PipeTransform {
  // orderBy=id:desc
  transform(value: string): Record<string, 'ASC' | 'DESC'> | undefined {
    if (value == null) return undefined;

    try {
      const queries = value.split(',').map((val) => val.trim());
      const orderBy: Record<string, 'ASC' | 'DESC'> = {};
      queries.forEach((query) => {
        // One query should be id:desc
        const [key, order] = query.split(':') as [string, 'asc' | 'desc'];

        // Check we have correct values
        if (!['asc', 'desc'].includes(order.toLocaleLowerCase())) {
          throw new BadGatewayException('Failed order by');
        }

        orderBy[key] = order.toLocaleUpperCase() as 'ASC' | 'DESC';
      });

      return orderBy;
    } catch (_) {
      throw new BadRequestException('Failed order by');
    }
  }
}
