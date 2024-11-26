import mongoose from 'mongoose';

const optionScheme = new mongoose.Schema({
  property: { type: String },
  value: { type: String },
  is_checked: { type: Boolean },
});

const cssListScheme = new mongoose.Schema({
  class_name: { type: String },
  option_list: [optionScheme],
});

const StateScheme = new mongoose.Schema({
  type: { type: String, required: true },
  id: { type: String },
  x: { type: Number },
  y: { type: Number },
  inputs: {
    children: {
      block: { type: mongoose.Schema.Types.ObjectId, ref: 'State' },
      shadow: { type: mongoose.Schema.Types.ObjectId, ref: 'State' },
    },
  },
  next: {
    block: { type: mongoose.Schema.Types.ObjectId, ref: 'State' },
    shadow: { type: mongoose.Schema.Types.ObjectId, ref: 'State' },
  },
  movable: { type: Boolean },
  inline: { type: Boolean },
  enabled: { type: Boolean },
  extraState: { type: mongoose.Schema.Types.Mixed },
  editable: { type: Boolean },
  disabledReasons: { type: [String] },
  deletable: { type: Boolean },
  data: { type: String },
  collapsed: { type: Boolean },
  icons: { type: Map, of: mongoose.Schema.Types.Mixed },
  fields: { type: Map, of: mongoose.Schema.Types.Mixed },
});

const workspaceBlockScheme = new mongoose.Schema({
  languageVersion: { type: Number },
  blocks: [StateScheme],
});

const workspaceScheme = new mongoose.Schema({
  workspace_id: { type: String, required: true, unique: true },
  user_id: { type: String, required: true },
  name: { type: String, required: true, default: '워크스페이스 이름' },
  canvas: workspaceBlockScheme,
  css_list: [cssListScheme],
  is_css_reset: { type: Boolean, required: true, default: false },
  thumbnail: { type: String },
  updated_at: { type: Date, required: true, default: Date.now },
});

export const Workspace = mongoose.model('workspace', workspaceScheme, 'workspaceList');
