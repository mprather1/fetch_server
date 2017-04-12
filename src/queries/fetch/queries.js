import got from 'got'
import url from 'url'
import request from 'request'

function fetchAllModels (req, res, options) {
  const {serverAddress, logger} = options

  const address = url.resolve(serverAddress, '/api/models')
  
  requestp(address, true, 'GET', null).then((data) => {
    res.status(200)
    .json(data)
  })
  
  .catch((err) => {
    logger.error(err)
  })
}

function createModel(req, res, options) {
  const {serverAddress, logger} = options

  const address = url.resolve(serverAddress, '/api/models')
  
  requestp(address, true, 'POST', req.body).then((data) => {
    res.status(200)
    .json(data)
  })
  
  .catch((err) => {
    logger.error(err)
  })  
}

function requestp(url, json, method, requestBody) {
  json = json || false
  if (requestBody === null) {
    return new Promise(function (resolve, reject) {
      request({url:url, json:json, method: method}, function (err, res, body) {
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
  } else {
    return new Promise(function (resolve, reject) {
      request({url:url, json:json, method: method, body:requestBody}, function (err, res, body) {
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
}

export default {
  fetchAllModels,
  createModel
}