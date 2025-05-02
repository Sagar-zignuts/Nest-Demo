import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist : true, // extra koi property aavi hse req.body ma je DTO ma nia mention hoy to eeva case ma error nai ape bt khali eej property ne lese ne biji property ne ignore krse.
    //And badhi property ma vaildation apvu jaruri che to j a consider thase.
    forbidNonWhitelisted : true, //Jo forbidNonWhitelisted true hase to koi extra property apso to error apse aa , data ne store nai thava dey aa
    transform : true
  }))
  await app.listen(process.env.PORT ?? 3000);
  
}
bootstrap();
