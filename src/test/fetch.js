import chai from 'chai'
import chaiHttp from 'chai-http'
import server from '../server'

chai.use(chaiHttp)

const expect = chai.expect

describe('Fetch Server...', function () {
  it('should fetch from server at /api/fetch GET', function (done) {
    chai.request(server)
    .get('/api/fetch')
    .end(function (err, res) {
      expect(res).to.have.status(200)
      expect(res.body).to.have.status('success')
      expect(res.body.payload[0]).to.have.property('id')
      done()
    })
  })
})