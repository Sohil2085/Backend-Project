class apiError extends Error {
    constructor(
        statusCode,
        message = "Something Went Wrong",
        errors = [],
        statck = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.succes = false
        this.errors = errors

        if(statck) {
            this.stack = statck
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export {apiError}