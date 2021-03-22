const request = require('supertest')
describe('Start unit test', function () {
    let server;
    beforeEach(function () {
        server = require('../server',{ bustCache: true })
    });
    afterEach(function (done) {
        server.close(done)
    });
    it('fetch flicker REST api via this backend', function testSlash(done){
        request(server)
            .post('/api/flicker/feed')
            .expect(200, done)
    })
});