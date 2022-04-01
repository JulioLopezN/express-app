import { Router } from 'express'

import { ServiceUnavailableError } from '../../shared/models/errors.model'

const router = Router()

interface HealthCheck {
    uptime: number
    message?: string
    timestamp: Date
}

router.get('/health-check', function (req, res) {
    try {
        const healthcheck: HealthCheck = {
            uptime: process.uptime(),
            timestamp: new Date()
        }
    
        res.status(200).json(healthcheck)
    } catch (err: any) {
        throw new ServiceUnavailableError()
    }
})

export default router