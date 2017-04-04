import chai from 'chai'
import chaiHttp from 'chai-http'
import server from '../server'

chai.use(chaiHttp)

const expect = chai.expect

describe('fetch', function () {
  it('should fetch from server at /api/fetch GET', function (done) {
    chai.request(server)
    .get('/api/fetch')
    .end(function (err, res) {
      console.log(res.body)
      expect(res).to.have.status(200)
      // expect(res.body[0]).to.have.property('id')
      done()
    })
  })
})