import axios from "axios"

// export const axiosInstance = axios.create({ baseURL: 'http://localhost:4000'});
const axiosInstance = axios.create({});
//laskdjalksfklakjladfskjlafskljddkldfskdskkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk

export const apiConnector = (method, url, bodyData, headers, params) => {
    console.log("ye rahi in sab ki values",method,"yahai method or url", url,"ab body", bodyData,"ab headeer", headers,"ab parameter", params);
    return axiosInstance({
        method:`${method}`,
        url:`${url}`,
        data: bodyData ? bodyData : null,
        headers: headers ? headers: null,
        params: params ? params : null,
      
    });
}