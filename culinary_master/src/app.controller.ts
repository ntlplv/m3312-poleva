import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
  @Get(':filename')
  serveStatic(@Param('filename') filename: string, @Res() res: Response) {
    res.sendFile(join(__dirname, '..', 'public', filename));
  }
}
