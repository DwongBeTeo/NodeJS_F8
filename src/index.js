const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')))

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({
  extname: '.hbs'
})); // Sử dụng hbs.engine
app.set('view engine', 'hbs');
app.set('views','./src/resources/views'); // Chỉ định thư mục layouts

console.log('Path: ',__dirname);

app.get('/', (req, res) => {
  return res.render('home'); // Render file main.handlebars
});

app.get('/news', (req, res) => {
  return res.render('news'); // Render file main.handlebars
});

app.listen(port, () => {
  console.log(`Ứng dụng đang chạy tại http://localhost:${port}`);
});