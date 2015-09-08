import express from 'express'

let app = express()
const port = process.env.PORT || 3000

// Config
app.set('port', port)
app.use(express.static(`dist/public`))
app.use(express.static(`jspm_packages`))
app.use(express.static(`node_modules`))
app.listen(app.get('port'), () => console.log(`Serving app at http://localhost:${ app.get("port") }`))


// app routing
app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`))
