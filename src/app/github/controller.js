import { axiosRequest } from '../../helpers/axiosHelper';
import { githubDomain } from '../../helpers/constants';
import { errorHandler } from '../../../utils/errorHandler';
import validator from './validator';

async function userRepos(req, res) {
    try {
        const validQuery = await validator.queryValidator.validate({ query: req.query });
        const { access_token, limit, offset } = validQuery.query;

        const accessToken = access_token || process.env.access_token;

        const response = await axiosRequest({
            method: 'get',
            url: `${githubDomain}/user/repos`,
            data: {
                access_token: accessToken
            },
            limit,
            offset,
            manual: true
        });

        const data = (response.data && response) || response.error;

        return res.send(data);
    } catch (err) {
        const error = new errorHandler(err);
        return res.send(error);
    }

}

export default {
    userRepos
}