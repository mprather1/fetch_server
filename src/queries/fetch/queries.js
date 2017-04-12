import got from 'got'
import url from 'url'
import request from 'request'

function fetchAllModels (req, res, options) {
  const {serverAddress, logger} = options
  let results
  const address = url.resolve(serverAddress, '/api/models')
  
  requestp(address, true).then((data) => {
    res.status(200)
    .json(data)
  })
  
  .catch((err) => {
    logger.error(err)
  })
}

function requestp(url, json) {
  json = json || false
  return new Promise(function (resolve, reject) {
    request({url:url, json:json}, function (err, res, body) {
      if (err) {
        console.log(err)
        return reject(err)
      }
      if (res.statusCode !== 200) {
        err = new Error('Unexpected status code: ' + res.statusCode)
        return reject(err)
      }
      resolve(body)
    })
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