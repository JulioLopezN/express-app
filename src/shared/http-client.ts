import axios, { AxiosResponse } from 'axios'

export function getHttpClient(url: string) {
    const instance = axios.create({
        baseURL: url
    })

    instance.interceptors.response.use(function (res: AxiosResponse<any, any>) {
        if (res.status >= 200 && res.status < 300) return res
        
        console.error('Http error:', res)
    })

    return instance
}
