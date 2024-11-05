import swaggerAutogen from 'swagger-autogen';
import { options } from './swagger';

const outputFile = './src/docs/swagger-output.json';
const endpointsFiles = ['./src/routes/v1/index.ts'];

const swaggerAutogenInstance = swaggerAutogen();

swaggerAutogenInstance(outputFile, endpointsFiles, options).then(() => {
  console.log('Swagger documentation generated');
});
