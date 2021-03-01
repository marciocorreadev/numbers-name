import { Request, Response } from 'express'
import { numberValidate } from '@validators'
import parseNumber from '@services/NumberToNameService'
import AppError from '../errors/AppErro'

export default class NumberNameController {
    get(request: Request, response: Response) {
        try {
            const { params: { number } } = request

            if (numberValidate(number)) throw new AppError(`${number} is a invalid number.`)

            const extenso = parseNumber(number)
            return response.json({ extenso })
        } catch (error) {
            throw new AppError(error.message, 500)
        }
    }
}