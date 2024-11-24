import mongoose from 'mongoose';

const workspaceScheme = new mongoose.Schema({
  workspace_id: { type: String, required: true, unique: true },
  user_id: { type: String, required: true },
  name: { type: String, required: true, default: '워크스페이스 이름' },
  thumbnail: { type: String },
  updated_at: { type: Date, required: true, default: Date.now },
});

export const Workspace = mongoose.model('workspace', workspaceScheme, 'workspaceList');
