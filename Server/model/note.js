const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema(
  {
    title: {type: String},
    tagLine: {type: String},
    content: {type: String},
    isPinned: {type: Boolean}
  },
  { collection: 'notes' }
);

const model = mongoose.model('NotesSchema', NotesSchema);

module.exports = model;
