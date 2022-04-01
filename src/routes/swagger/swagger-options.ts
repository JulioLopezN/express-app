import path from 'path'

const domain = process.env.CURRENT_DOMAIN || 'http://localhost:3000'

export default {
    explorer: true,
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Express app',
            version: '1.0.0',
            description: 'Microservice'
        },
        servers: [
            {
                url: `${domain}/`
            }
        ]
    },
    apis: [path.join(__dirname, '../**/*.js'), path.join(__dirname, '../**/*.ts')]
}
