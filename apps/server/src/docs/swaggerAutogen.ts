import swaggerAutogen from 'swagger-autogen';
import fs from 'fs';
import { options } from './swagger';

const outputFile = './src/docs/swagger-output.json';
const endpointsFiles = ['./src/routes/v1/index.ts'];

const swaggerAutogenInstance = swaggerAutogen();

swaggerAutogenInstance(outputFile, endpointsFiles, options).then(() => {
  console.log('Swagger documentation generated in Swagger 2.0 format');

  fs.readFile(outputFile, 'utf8', (err, data) => {
    if (err) throw err;

    let swaggerDoc = JSON.parse(data);

    swaggerDoc.openapi = '3.0.0';
    delete swaggerDoc.swagger;

    if (swaggerDoc.host && swaggerDoc.basePath) {
      swaggerDoc.servers = [
        {
          url: `http://${swaggerDoc.host}${swaggerDoc.basePath}`,
        },
      ];
    }
    delete swaggerDoc.host;
    delete swaggerDoc.basePath;
    delete swaggerDoc.schemes;

    if (swaggerDoc.swaggerDefinition && swaggerDoc.swaggerDefinition.components) {
      swaggerDoc.components = swaggerDoc.swaggerDefinition.components;
    }
    delete swaggerDoc.swaggerDefinition;

    delete swaggerDoc.apis;

    fs.writeFile(outputFile, JSON.stringify(swaggerDoc, null, 2), (err) => {
      if (err) throw err;
      console.log('Swagger document successfully converted to OpenAPI 3.0 format');
    });
  });
});
