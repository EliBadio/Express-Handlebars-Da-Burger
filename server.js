const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes
const routes = require('./controller/burgers_controller');
app.use(routes);

const PORT = 8080;
app.listen(PORT, function () {
  console.log(`App now listening on port: ${PORT}`);
});