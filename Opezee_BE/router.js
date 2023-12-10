// router.js 

const express = require('express');
const { App } = require('./collector');

const router = express.Router();

router.get('/apps', async (req, res) => {
  try {
    const apps = await App.find();
    res.json(apps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/apps', async (req, res) => {
  const app = new App(req.body);
  try {
    const newApp = await app.save();
    res.status(201).json(newApp);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/apps/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const app = await App.findById(id);
    if (!app) {
      return res.status(404).json({ message: 'App not found' });
    }
    res.json(app);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/apps/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const updatedApp = await App.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedApp) {
      return res.status(404).json({ message: 'App not found' });
    }
    res.json(updatedApp);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/apps/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedApp = await App.findByIdAndDelete(id);
    if (!deletedApp) {
      return res.status(404).json({ message: 'App not found' });
    }
    res.json({ message: 'App deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
