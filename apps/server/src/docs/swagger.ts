import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'BooLock API',
      version: '0.1.0',
      description: 'BooLock API with express',
    },
    servers: [{ url: 'localhost:3000' }],
    basePath: '/',
  },
  apis: ['./src/routes/v1/*.ts', '/src/docs/*.yaml'],
};

const specs = swaggerJsdoc(options);

export { options, swaggerUi, specs };
