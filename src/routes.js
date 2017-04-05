import express from 'express'
import {fetch} from './queries'
const router = express.Router()

export default function getRouter (options) {
  router.route('/fetch')
    .get(function (req, res) {
      fetch.fetchAllModels(req, res, options)
    })
    
    .post(function (req, res) {
      fetch.createModel(req, res, options)
    })
  
  return router
}