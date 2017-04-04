import express from 'express'
import {fetch} from './queries'
const router = express.Router()

function getRouter (options) {
  router.get('/fetch', async function (req, res) {
    const body = await fetch.fetchAllModels(req, res, options)
  })
  
  return router
}
export default getRouter