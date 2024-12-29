const express = require('express');
const router = express.Router();
const upload = require('../config/upload'); // Import the upload middleware

// Example route for uploading a file
router.post('/upload', upload.single('image'), (req, res) => {
  res.send('File uploaded successfully');
});

module.exports = router;
