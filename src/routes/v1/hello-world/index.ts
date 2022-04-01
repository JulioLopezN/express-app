import { Router } from 'express'

const router = Router()

/**
 *
 *  @swagger
 *  tags:
 *      name: hello-world
 *      description: Hello world.
 *      basePath: /api/v1/hello-world
 */

/**
 *  @swagger
 *  /{name}:
 *      get:
 *          summary: Get hello
 *          tags: [hello-world]
 *          description: Returns json with message
 *          parameters:
 *              - in: path
 *                name: name
 *                schema:
 *                  type: string
 *                required: true
 *                description: Name
 *          responses:
 *              200:
 *                  description: json with message
 */
router.get('/:name', async function (req, res) {
    const name = req.params.name

    return res.json({
        message: `Hello ${name}`
    })
})

/**
 *  @swagger
 *  /:
 *      get:
 *          summary: Get hello
 *          tags: [hello-world]
 *          description: Returns json with message
 *          parameters:
 *              - in: query
 *                name: name
 *                schema:
 *                  type: string
 *                required: false
 *                description: Name
 *          responses:
 *              200:
 *                  description: json with message
 */
router.get('/', async function (req, res) {
    const name = req.query.name || 'world'

    return res.json({
        message: `Hello ${name}`
    })
})

/**
 *  @swagger
 *  /:
 *      post:
 *          summary: Get hello
 *          consumes:
 *              - application/json
 *          tags: [hello-world]
 *          description: Returns json with message
 *          parameters:
 *              - in: body
 *                name: message
 *                description: Data related to the incident.
 *                schema:
 *                  type: object
 *                  required:
 *                    - name
 *                  properties:
 *                    name:
 *                      type: string
 *                responses:
 *                    200:
 *                        description: json with message
 */
router.post('/', async function (req, res) {
    const name = req.body.name

    return res.json({
        message: `Hello ${name}`
    })
})

export default router
