import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.setGlobalPrefix('api');
	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true
		}
	));

	// swagger documentation
	const options = new DocumentBuilder()
		.setTitle('NestCommerce Api')
		.setDescription('This is the api documentation of nestCommerce')
		.setVersion('1.0.0')
		.addBearerAuth(
			{
			  type: 'http',
			  scheme: 'bearer',
			  bearerFormat: 'Bearer',
			  name: 'Authentication',
			  description: 'Enter token',
			  in: 'header',
			},
			'jwt', // This name here is important for matching up with @ApiBearerAuth() in your controller!
		  )
		.build();
	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('api', app, document);

	await app.listen(3000);
}
bootstrap();
