
module.exports = function(app){
  app.post('/login', (req, res) => {
    if((req.body.username) === '' && (req.body.password) === '') {
      res.send({
        message: "User name or password can't be blank"
      })
    } else {
      res.send({
        message: true
      })
    }
  })
}
