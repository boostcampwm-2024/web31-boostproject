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
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
    components: {
      schemas: {
        Todo: {
          type: 'object',
          properties: {
            todoid: { type: 'integer', example: 1 },
            content: { type: 'string', example: 'Sample todo content' },
            completed: { type: 'string', example: 'false' },
            created: { type: 'string', format: 'date-time', example: '2024-11-07T00:00:00.000Z' },
          },
          required: ['todoid', 'content'],
        },
      },
    },
  },
  apis: ['./src/routes/v1/*.ts', './src/docs/*.yaml'],
};

const specs = swaggerJsdoc(options);

export { options, swaggerUi, specs};
