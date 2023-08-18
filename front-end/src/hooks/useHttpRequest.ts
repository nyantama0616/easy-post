import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";

interface IHttpRequestManager {
    get: (path: string) => Promise<AxiosResponse<any, any>>
}

type PostParams = {
    e_mail: string
    password: string
};
class HttpRequestManager implements IHttpRequestManager {
    private static BASE_URL = "http://localhost:3001/";

    get(path: string): Promise<AxiosResponse<any, any>> {
        const url = HttpRequestManager.BASE_URL + path;
        const promise = axios.get(url);
        return promise;
    }
    
    post(path: string, params: PostParams): Promise<AxiosResponse<any, any>> {
        const url = HttpRequestManager.BASE_URL + path;
        const promise = axios.post(url, params);
        return promise;
    }
}


type HttpRequestValue = {
    get: (path: string) => Promise<AxiosResponse<any, any>>
    post: (path: string, params: PostParams) => Promise<AxiosResponse<any, any>>
};
export function useHttpRequest(): HttpRequestValue {
    const hrm = new HttpRequestManager();
    
    function get(path: string): Promise<AxiosResponse<any, any>> {
        const promise = hrm.get(path);
        return promise;
    }
    
    function post(path: string, params: PostParams): Promise<AxiosResponse<any, any>> {
        const promise = hrm.post(path, params);
        return promise;
    }

    return { get, post };
}
