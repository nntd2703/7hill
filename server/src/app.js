const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')


const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));

/*var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'MF_clone_tiki',
    json: true
})


connection.connect() */

app.get('/status', (req, res) => {
  res.send({
    message: 'hello'
  })
})
const appRoutes = require('../routes/api')(app)

/*connection.on('error', function (err) {
  console.log("[mysql error]", err);
});*/

module.exports = app;
