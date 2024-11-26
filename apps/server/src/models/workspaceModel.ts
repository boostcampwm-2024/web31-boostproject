import mongoose from 'mongoose';

const optionScheme = new mongoose.Schema({
  property: { type: String, required: true },
  value: { type: String, required: true },
  is_checked: { type: Boolean, required: true },
});

const cssListScheme = new mongoose.Schema({
  class_name: { type: String, required: true },
  option_list: [optionScheme],
});

const workspaceScheme = new mongoose.Schema({
  workspace_id: { type: String, required: true, unique: true },
  user_id: { type: String, required: true },
  name: { type: String, required: true, default: '워크스페이스 이름' },
  css_list: [cssListScheme],
  is_css_reset: { type: Boolean, required: true, default: false },
  thumbnail: { type: String },
  updated_at: { type: Date, required: true, default: Date.now },
});

export const Workspace = mongoose.model('workspace', workspaceScheme, 'workspaceList');
