import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

function asyncWrapper(method: any): Promise<any> {
    return new Promise((resolve) => {
        method
            .then((res: PromiseFulfilledResult<any>) => resolve([null, res]))
            .catch((err: PromiseRejectedResult) => resolve([err, null]));
    });
}
export async function FetchAPI(url: string, config?: AxiosRequestConfig) {
    return await asyncWrapper(axios.get(url, config));
}
