import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import getRouter from './routes'
import {Server} from 'http'
import chalk from 'chalk'
import winston from 'winston-color'
import favicon from 'serve-favicon'
import path from 'path'

const _parentDir = path.dirname(__dirname)

const options = {
  app: express(),
  port: process.env.PORT || 8001,
  environment: process.env.NODE_ENV || 'development',
  serverAddress: process.env.SERVER_ADDRESS,
  logger: winston
}

const { app, environment, port, logger } = options

if (environment !== 'test') {
  app.use(morgan('dev'))
}

app.use(favicon(path.join(__dirname, 'resources', 'images', 'favicon.png')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/css', express.static(path.join(_parentDir, 'node_modules', 'bootstrap', 'dist', 'css')))
app.use(express.static(path.join(__dirname, 'static')))

const router = getRouter(options)

app.use('/api', router)

const server = Server(app).listen(port, () => {
  if (environment !== 'test') {
    logger.info(chalk.bgBlack.green('listening on port', port + '...'))
  }
})

export default server
