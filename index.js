var express = require('express')
  , app = express()
  , port = process.env.PORT || 3000


// Config
app.set('port', port)
app.use(express.static('public'))
app.use(express.static('node_modules'))
app.use(express.static('jspm_packages'))
app.listen(app.get('port'), function(){
  console.log('Serving app at http://localhost:%s', app.get('port'))
})


// app routing
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
})
