const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb+srv://rahulkrishnay:W1OSgZu0uy9B6HlL@cluster0.y2qp17l.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Routes
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');

// Use the routes
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
