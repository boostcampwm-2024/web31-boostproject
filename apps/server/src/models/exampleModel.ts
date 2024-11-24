import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  todoid: { type: Number, required: true, unique: true },
  content: { type: String, required: true },
  completed: { type: String, default: false }
}, {
  timestamps:true
});

const Todo = mongoose.model('Todo', todoSchema, 'todos');

export default Todo;
