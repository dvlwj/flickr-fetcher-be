const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const config = require('./src/config')
const routes = require('./src/routes')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/public/uploads', express.static(process.cwd() + '/public/uploads'));
app.use
app.use(
    cors({
        allowedHeader: ['sessionId', 'Content-Type', 'master-token'],
        exposedHeaders: ['sessionId'],
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
    }),
)
routes(app)
app.listen(
    config.port,
    () => console.log(
        `Flicker Fetcher Backend listening at port ${config.port} with Environment: ${config.env}`
    )
)