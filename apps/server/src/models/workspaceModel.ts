import mongoose from 'mongoose';

/* eslint-disable */

const optionScheme = new mongoose.Schema({
  property: { type: String },
  value: { type: String },
  is_checked: { type: Boolean },
});

const cssListScheme = new mongoose.Schema({
  class_name: { type: String },
  option_list: [optionScheme],
});

/* eslint-disable */
const workspaceScheme = new mongoose.Schema({
  workspace_id: { type: String, required: true, unique: true },
  user_id: { type: String, required: true },
  name: { type: String, required: true, default: '워크스페이스 이름' },
  canvas: { type: String },
  css_list: [cssListScheme],
  class_block_list: { type: String },
  is_css_reset: { type: Boolean, required: true, default: false },
  thumbnail: { type: String },
  image_list: { type: Map, of: String },
  image_map: { type: Map, of: String },
  updated_at: { type: Date, required: true, default: Date.now },
});

export const Workspace = mongoose.model('workspace', workspaceScheme, 'workspaceList');
