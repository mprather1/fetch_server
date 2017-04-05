import got from 'got'
import url from 'url'

async function fetchAllModels (req, res, mext, options) {
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

export default {
  fetchAllModels
}