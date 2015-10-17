var express = require('express')
  , app = express()
  , port = process.env.PORT || 3000


app.set('port', port)
app.use('/public', express.static(`${__dirname}/public`))
app.use(express.static(`${__dirname}/jspm_packages`))
app.use('/config.js', (req, res) => res.sendFile(`${__dirname}/config.js`))


app.listen(app.get('port'), () => console.log(`Serving app at http://localhost:${app.get('port')}`))


app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`))
