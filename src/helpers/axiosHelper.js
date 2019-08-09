import axios from 'axios';

export async function axiosRequest({
    method,
    url,
    data = {},
    limit,
    offset = 0,
    manual = false
}) {
    let response;
    try {
        if(method.toLowerCase() === 'get') {
            response = await axios({
                method,
                url,
                params: data
            })
        } else if(method.toLowerCase() === 'post' || method.toLowerCase() === 'put') {
            response = await axios({
                method,
                url,
                data
            });
        }

        if(manual && limit && response.data.length) {
            const paginatedData = [];
            response.data.forEach((item, index) => {
                if(index>=offset && index<offset+limit) {
                    paginatedData.push(item);
                }
            });

            response.data = paginatedData;
        }

        return {
            status: response.status,
            message: response.statusText,
            data: response.data
        };
    } catch(e) {
        console.error(e.message);
        return {
            error: {
                status: e.response.status,
                message: e.response.statusText,
                data: e.response.data
            }
        }
    }
}