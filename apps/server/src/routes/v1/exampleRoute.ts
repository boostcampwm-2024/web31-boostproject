import express from 'express';
import {
  createTodoController,
  getTodoByIdController,
  getAllTodosController,
  updateTodoByIdController,
  deleteTodoByIdController,
} from '../../controllers/exampleController'

const router = express.Router();

router.route('/welcome').get((req, res) => {
  res.send('환영합니다! 처음 방문하셨네요.');
});

router.route('/test').get((req, res) => {
  res.send('test');
});

router.post('/todos', createTodoController);

router.get('/todos/:todoid', getTodoByIdController);

router.get('/todos', getAllTodosController);

router.put('/todos/:todoid', updateTodoByIdController);

router.delete('/todos/:todoid', deleteTodoByIdController);


export default router;
