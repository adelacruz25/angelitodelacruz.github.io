const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware and static files
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Routes
const indexRouter = require('./src/routes/index');
app.use('/', indexRouter);

app.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
