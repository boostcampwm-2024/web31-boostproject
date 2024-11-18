import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

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
        Workspace: {
          type: 'object',
          properties: {
            workspace_id: {
              type: 'string',
              example: 'b15eac31-3942-4192-9cbd-2e2cdd48da0a',
            },
            name: {
              type: 'string',
              example: '워크스페이스 이름',
              default: '워크스페이스 이름',
            },
            thumbnail: {
              type: 'string',
              example: 'https://example.com/thumbnail.png',
            },
            updated_at: {
              type: 'string',
              format: 'date-time',
              example: '2024-11-07T00:00:00.000Z',
            },
          },
          required: ['workspace_id', 'name', 'updated_at'],
        },
        WorkspaceIdResponse: {
          type: 'object',
          properties: {
            workspace_id: {
              type: 'string',
              example: 'b15eac31-3942-4192-9cbd-2e2cdd48da0a',
            },
          },
          required: ['workspace_id'],
        },
        WorkspaceListDto: {
          type: 'object',
          properties: {
            pagedWorkspaceListResult: {
              type: 'object',
              properties: {
                workspaceList: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Workspace',
                  },
                },
                nextCursor: {
                  $ref: '#/components/schemas/NextCursor',
                },
              },
            },
          },
        },
        NextCursor: {
          type: 'object',
          properties: {
            updated_at: {
              type: 'string',
              example: '2024-11-07T00:00:00.000Z',
            },
            workspace_id: {
              type: 'string',
              example: 'b15eac31-3942-4192-9cbd-2e2cdd48da0a',
            },
          },
          required: ['updated_at', 'workspace_id'],
        },
        WorkspaceDto: {
          type: 'object',
          properties: {
            workspace_id: {
              type: 'string',
              example: 'b15eac31-3942-4192-9cbd-2e2cdd48da0a',
            },
            name: {
              type: 'string',
              example: '워크스페이스 이름',
            },
          },
        },
      },
    },
  },
  apis: ['./src/routes/v1/*.ts', './src/docs/*.yaml'],
};

const specs = swaggerJsdoc(options);

export { options, swaggerUi, specs };
