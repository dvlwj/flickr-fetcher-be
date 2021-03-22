const HttpStatus = require('../HttpStatus')

const controller = {
    helloWorld: (req,res) => {
        return res.status(HttpStatus.OK).send('Hello World from API')
    }
}

module.exports = {
    controller
}