
module.exports = function(app){
  app.post('/login', (req, res) => {
    if(req.body.username === '123') {
      res.send({
        message: false
      })
    } else {
      res.send({
        message: true
      })
    }
  })
}
