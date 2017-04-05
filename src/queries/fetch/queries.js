import got from 'got'
import url from 'url'

async function fetchAllModels (req, res, options) {
  const {serverAddress} = options
  
  const address = url.resolve(serverAddress, '/api/models')
  
  const {body} = await got(address, {
    json: true,
    timeout:15000
  })
  
  res.status(200)
  .json({
    status: 'success',
    payload: body
  })
}

async function createModel (req, res, options) {
  const {serverAddress} = options
  const address = url.resolve(serverAddress, '/api/models')
  
  const {body} = await got.post(address, {
    json: true,
    body: req.body,
    timeout: 15000
  })
  res.status(200)
  .json({
    status: 'success'
  })
}

export default {
  fetchAllModels,
  createModel
}