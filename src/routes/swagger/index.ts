import swaggerUi from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
import { Router } from 'express'
import swaggerOptions from './swagger-options'

const swaggerSpec = swaggerJsDoc(swaggerOptions);

const router = Router()
router.get('/swagger', swaggerUi.setup(swaggerSpec))

export default router
