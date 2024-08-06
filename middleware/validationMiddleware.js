import {body, validationResult} from "express-validator"
import { BadRequestError } from "../errors/customErorr.js"
import { JOB_STATUS, JOB_TYPE } from "../util/constants.js"

const withValidationErrors= (validateValues) =>{
    return [validateValues,(req,res,next)=>{
        const errors = validationResult(req)
        if(!error.isEmpty()){
            const errorMessages= errors.array().map((error) => error.msg);
            throw new BadRequestError(errorMessages)
        }
        next()
    }]
}

export const validateJobInput= withValidationErrors([
    body("company").notEmpty().withMessage("company is required"),
    body("profile").notEmpty().withMessage("profile is required"),
    body("jobLocation").notEmpty().withMessage("job location is required"),
    body("jobStatus")
    .notEmpty()
    .isIn(Object.values(JOB_STATUS))
    .withMessage("invlaid job status"),
    body("jobType").isIn(Object.values(JOB_TYPE)).withMessage("invlaid job type"),

])