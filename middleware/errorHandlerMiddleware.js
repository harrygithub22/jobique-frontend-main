import {BadRequestError,NotFoundError, UnauthenticatedError, UnauthorisedError} from "../errors/customErorr.js";
import { StatusCodes } from "http-status-codes"

const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err)
    const statusCode=err.message || StatusCodes.INTERNAL_SERVER_ERROR
    const msg= err.message || "something went wrong, please try again later!"
    res.status(statusCode).json({msg})
};

export default errorHandlerMiddleware;
 