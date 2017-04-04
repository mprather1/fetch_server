import express from 'express'
import {fetch} from './queries'
const router = express.Router()

router.route('/fetch')
  .get(fetch.fetchAll)
  
export default router