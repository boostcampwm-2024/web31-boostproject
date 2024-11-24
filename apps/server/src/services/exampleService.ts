import Todo from "../models/exampleModel";
import { Document } from 'mongoose';

type TodoType = {
  todoid: number;
  content: string;
  completed?: string;
}

type TodoDocumentType = TodoType & Document;

export const createTodo = async (data:TodoType): Promise<TodoDocumentType> => {
  try {
    const todo = new Todo(data);
    const savedTodo = await todo.save();
    return savedTodo;
  } catch (error:any) {
    throw new Error(`Error creating todo: ${error.message}`);
  }
};

export const getTodoById = async (todoid: number): Promise<TodoDocumentType|null> => {
  try {
    const todo = await Todo.findOne({ todoid });
    return todo;
  } catch (error:any) {
    throw new Error(`Error finding todo with id ${todoid}: ${error.message}`);
  }
};

export const getAllTodos = async () : Promise<TodoDocumentType[]> => {
  try {
    const todos = await Todo.find();
    return todos;
  } catch (error:any) {
    throw new Error(`Error retrieving todos: ${error.message}`);
  }
};

export const updateTodoById = async (todoid:number, updateData:Partial<TodoType>): Promise<TodoDocumentType|null> => {
  try {
    const updatedTodo = await Todo.findOneAndUpdate({ todoid }, updateData, {
      new: true,
      runValidators: true
    });
    return updatedTodo;
  } catch (error:any) {
    throw new Error(`Error updating todo with id ${todoid}: ${error.message}`);
  }
};

export const deleteTodoById = async (todoid:number): Promise<TodoDocumentType | null>  => {
  try {
    const deletedTodo = await Todo.findOneAndDelete({ todoid });
    return deletedTodo;
  } catch (error:any) {
    throw new Error(`Error deleting todo with id ${todoid}: ${error.message}`);
  }
};
