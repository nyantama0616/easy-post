import React, { useEffect, useState } from "react";

/**
 * 簡易的な認証情報の型のサンプル
 */
type AuthInfo = {
    userId: string;
};

type AuthContextProviderProps = {
    children: React.ReactNode;
};

// ログイン状態のContext
export const SignedInContext = React.createContext<boolean>(false);

// 認証情報と認証情報セットのContext
export const AuthInfoContext = React.createContext<[AuthInfo, React.Dispatch<React.SetStateAction<AuthInfo>>]>([{ userId: "" }, () => { }]);

export function AuthContextProvider({children}: AuthContextProviderProps) {
    // stateの定義
    const [signedIn, setSignedIn] = useState<boolean>(false);
    const [authInfo, setAuthInfo] = useState<AuthInfo>({ userId: "" });

    useEffect(() => {
        if (authInfo?.userId) {
            setSignedIn(true);
        } else {
            setSignedIn(false);
        }
    }, [authInfo]);

    return (
        <SignedInContext.Provider value={signedIn}>
            <AuthInfoContext.Provider value={[authInfo, setAuthInfo]}>
                {children}
            </AuthInfoContext.Provider>
        </SignedInContext.Provider>
    );
};
