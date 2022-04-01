export class InternalServerError extends Error {
    readonly status = 500

    constructor(cause?: Error) {
        super('Internal server error');
        this.name = 'InternalServerError'
        this.stack = cause?.stack
    }
}

export class ServiceUnavailableError extends Error {
    readonly status = 503

    constructor() {
        super('Service unavailable');
        this.name = 'ServiceUnavailableError'
    }
}