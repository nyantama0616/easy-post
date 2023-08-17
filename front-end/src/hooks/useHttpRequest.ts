import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";

interface IHttpRequestManager {
    get: (path: string) => Promise<AxiosResponse<any, any>>
}

class HttpRequestManager implements IHttpRequestManager {
    private static BASE_URL = "http://localhost:3001/";

    get(path: string): Promise<AxiosResponse<any, any>> {
        const url = HttpRequestManager.BASE_URL + path;
        const promise = axios.get(url);
        return promise;
    }
}

type HttpRequestValue = {
    get: (path: string) => Promise<AxiosResponse<any, any>>
};
export function useHttpRequest(): HttpRequestValue {
    const hrm = new HttpRequestManager();
    
    function get(path: string): Promise<AxiosResponse<any, any>> {
        const promise = hrm.get(path);
        return promise;
    }

    return { get };
}
