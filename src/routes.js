import express from 'express'
import {fetch} from './queries'
const router = express.Router()

export default function getRouter (options) {
  router.get('/fetch', async function (req, res) {
    const body = await fetch.fetchAllModels(req, res, null, options)
    return body
  })
  
  return router
}