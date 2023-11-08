const express = require('express');
const routes = require('./routes');
// import sequelize connection
const db = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

// sync sequelize models to the database, then turn on the server
db.sync({force:false}).then(() => {
  app.listen(PORT, () => console.log('Server started', PORT))
});


// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });
