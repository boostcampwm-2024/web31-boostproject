import express from 'express';
import {
  createTodoController,
  getTodoByIdController,
  getAllTodosController,
  updateTodoByIdController,
  deleteTodoByIdController,
} from '../../controllers/exampleController';

const router = express.Router();

router.route('/welcome').get((req, res) => {
  res.send('환영합니다! 처음 방문하셨네요.');
});

router.route('/test').get((req, res) => {
  res.send('test');
});

router.post(
  '/todos',
  createTodoController
  /* 
    #swagger.summary = '새로운 Todo 생성'
    #swagger.description = '새로운 todo 항목을 생성합니다.'
    #swagger.tags = ['Todos']
    #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Todo" 
          }
        }
      }
    }
    #swagger.responses[201] = {
      description: 'Todo 생성 성공',
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Todo"
          }
        }
      }
    }
    #swagger.responses[500] = {
      description: '서버 에러'
    }
  */
);

router.get('/todos/:todoid', getTodoByIdController);

router.get('/todos', getAllTodosController);

router.put('/todos/:todoid', updateTodoByIdController);

router.delete('/todos/:todoid', deleteTodoByIdController);

export default router;
