import { NextFunction, Request, Response } from 'express'

export const errorHandlerMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.message, err)
    return res.status(err.status || 500).json({
        message: 'Unexpected server error'
    })
}
