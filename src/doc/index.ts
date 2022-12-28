import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
export const initDoc = (app) => {
  const options = new DocumentBuilder()
    .setTitle('飞鸽工作台项目接口文档')
    .setDescription('客服管理，订单管理')
    .addBearerAuth()
    .setVersion('1')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('/api-docs', app, document)
}