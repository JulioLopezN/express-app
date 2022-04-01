
import path from 'path'
import cookieParser from 'cookie-parser'
import express from 'express'
import logger from 'morgan'
import helmet from 'helmet'
import dotenv from 'dotenv'
import swaggerUi from 'swagger-ui-express'

dotenv.config()

import healthCheckRouter from './routes/health-check'
import swaggerRouter from './routes/swagger'
import helloWorldRouter from './routes/v1/hello-world'
import { connect } from './shared/database'
import { errorHandlerMiddleware } from './shared/middlewares/error-handler.middleware'

const app = express()

app.use(logger(process.env.LOGGER_FORMAT || 'combined'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(helmet())
app.use(errorHandlerMiddleware)
app.use(swaggerUi.serve)

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/', healthCheckRouter)
app.use('/', swaggerRouter)
app.use('/api/v1/hello-world', helloWorldRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

const MONGODB_CONNECTION = process.env.MONGODB_CONNECTION || ''
connect(MONGODB_CONNECTION)

export default app
