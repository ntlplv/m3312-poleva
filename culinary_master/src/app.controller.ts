import {Controller, Get, Param, Render, Res} from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
  // @Get(':filename')
  // serveStatic(@Param('filename') filename: string, @Res() res: Response) {
  //   res.sendFile(join(__dirname, '..', 'public', filename));
  // }

  @Get('')
  @Render('Culinary_master')
  getCulinaryMasterPage() {
    return
    { title: "Кулинарный мастер" }
    };
}
