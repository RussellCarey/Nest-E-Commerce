// import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

// /** Convert a string like "name asc, address desc" to { name: "asc", address: "desc" } */
// @Injectable()
// export class WherePipe implements PipeTransform {
//   // orderBy=id:desc
//   transform(value: string): Record<string, any> | undefined {
//     if (value == null) return undefined;

//     try {
//       const queries = value.split(',').map((val) => val.trim());
//       const parameters: Record<string, any> = {};

//       queries.forEach((query) => {
//         // One query should be id:desc
//         const [key, term] = query.split(':') as [string, any];
//         parameters[key] = term;
//       });

//       return parameters;
//     } catch (_) {
//       throw new BadRequestException('Fail using where pipe');
//     }
//   }
// }
