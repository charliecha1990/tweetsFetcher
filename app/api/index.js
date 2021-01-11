import axios from 'axios'
import { getProxy } from '../utils/getProxy'

const defaulTimeout = 5000;
const api = {
    /**
     * fetch the recent tweets of a specific user by userName
     * @param  {string} username The twitter username
     */
    fetchTweetsByUserName(userName) {
        // Dangerours, this should come from a key vault reference in pro
        const access_token =
            'AAAAAAAAAAAAAAAAAAAAAHoxLQEAAAAAhuYnXI3bWYkQ3kS4Xz6iG0mtbS0%3Dg6dH3Av5IQjYsNQb5UNG1UWGmhJi5LOn2Znxo2yoYBhxEAN1kf'
        return axios.get(getProxy(userName), {
            defaulTimeout: 5000,
            headers: {
                Authorization: `Bearer ${access_token}`,
                ContentType: 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            },
        })
    },
}

export default api
