// module.js 

const mongoose = require('mongoose');

const appSchema = new mongoose.Schema({
  appName: String,
  appLogoUrl: String,
  appLink: String,
  appDescription: String,
  appIntroVideo: String 
});

const App = mongoose.model('App', appSchema);

module.exports = App;
