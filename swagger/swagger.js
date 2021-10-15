const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      version: '1.0.0',
      title: '캘린더형 다이어리 API',
      description: '아직은 미완성입니다.'
    },
    host: 'localhost:4000',
    schemes: ['http', 'https'],
    basePath: '/',
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'apiKey',
          name: 'Authorization',
          scheme: 'bearer',
          in: 'header',
          bearerFormat: 'JWT'
        },
      },
    },
    security: [{bearerAuth: []}],
  },
  apis: ['./routers/swagger/*.js']
};

const specs = swaggerJsDoc(options);
module.exports = {
  swaggerUi, specs
};