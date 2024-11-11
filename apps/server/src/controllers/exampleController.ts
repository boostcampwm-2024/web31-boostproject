import { Request, Response } from 'express';
import {
  createTodo,
  getTodoById,
  getAllTodos,
  updateTodoById,
  deleteTodoById,
} from '../services/exampleService';

export const createTodoController = async (req: Request, res: Response): Promise<void> => {
  try {
    const todo = await createTodo(req.body);
    res.status(201).json(todo);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getTodoByIdController = async (req: Request, res: Response): Promise<void> => {
  try {
    const todoId = parseInt(req.params.todoid, 10);
    const todo = await getTodoById(todoId);
    if (!todo) {
      res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json(todo);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllTodosController = async (_req: Request, res: Response): Promise<void> => {
  try {
    const todos = await getAllTodos();
    res.status(200).json(todos);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTodoByIdController = async (req: Request, res: Response): Promise<void> => {
  try {
    const todoId = parseInt(req.params.todoid, 10);
    const updatedTodo = await updateTodoById(todoId, req.body);
    if (!updatedTodo) {
      res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json(updatedTodo);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTodoByIdController = async (req: Request, res: Response): Promise<void> => {
  try {
    const todoId = parseInt(req.params.todoid, 10);
    const deletedTodo = await deleteTodoById(todoId);
    if (!deletedTodo) {
      res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json({ message: 'Todo deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
