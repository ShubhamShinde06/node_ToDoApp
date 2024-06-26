export class ErrorHandler extends Error {

    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
    }

}

const errorMiddleware = (err,req,res,next) => {

    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;

    return res.status(err.statusCode).json({
        suceess: false,
        mesage: err.message,
    });
}

export default errorMiddleware;