import joi from '@hapi/joi';

export default {
    queryValidator: joi.object({
        query: joi.object({
            access_token: joi.string(),
            limit: joi.number(),
            offset: joi.number()
        })
    })
}