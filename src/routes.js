const { flickerRouter } = require('./router')
module.exports = function route(app) {
    app.get('/', (req, res) => {
        res.send('Hello World from Root')
    })
    app.use('/api', flickerRouter)
}