const HttpStatus = require('../HttpStatus')
const fetch = require('node-fetch')
const settings = {
    method: 'Get'
}

const controller = {
    helloWorld: (req,res) => {
        return res.status(HttpStatus.OK).send('Hello World from API')
    },
    getFeed: async (req, res) => {
        const tags = req.body.tags
        let url = 'https://api.flickr.com/services/feeds/photos_public.gne?lang=en-us&format=json&nojsoncallback=1'
        if(tags) url = url + `&tags=${tags}`
        await fetch(url,settings)
            .then(res => res.json())
            .then(json => {
                return res.status(HttpStatus.OK).json(json)
            })
            .catch( e => {
                return res.status(HttpStatus.serverError).json(e)
            })
    }
}

module.exports = {
    controller
}