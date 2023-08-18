import React, {useContext} from "react";
import { AxiosResponse } from "axios";
import { useHttpRequest } from "./useHttpRequest";
import { AuthInfoContext } from "../context/AuthContextProvider";

type UseSignInReturnValue = {
    signIn: (eMail: string, password: string) => Promise<void>
};
export function useSignIn(): UseSignInReturnValue {
    const hr = useHttpRequest();
    const [authInfo, setAuthInfo] = useContext(AuthInfoContext); 
    function signIn(eMail: string, password: string) {
        const params = {
            user: {
                e_mail: eMail,
                password: password,
            }
        };

        return new Promise<void>((resolve, reject) => {
            hr.post("/sign-in", params)
                .then(r => {
                    setAuthInfo({ userId: "123"});
                    resolve();
                })
                .catch(e => {
                    reject(new Error());
                });
        });
    }

    return { signIn };
}
