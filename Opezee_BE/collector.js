// collector.js 

const mongoose = require('mongoose');
const App = require('./module'); 

mongoose.connect('mongodb+srv://rahulrajenderan96:rahulrajenderan96@cluster0.hvl3auh.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = { App, mongoose }; 
