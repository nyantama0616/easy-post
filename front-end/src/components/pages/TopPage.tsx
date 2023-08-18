import React, {useDebugValue, useEffect, useState, useContext} from "react";
import axios from "axios";
import { useHttpRequest } from "../../hooks/useHttpRequest";
import { SignedInContext } from "../../context/AuthContextProvider";

export default function TopPage() {
    const [text, setText] = useState<string>("");
    const hr = useHttpRequest();

    const isSignedIn = useContext(SignedInContext);
    
    useEffect(() => {
        hr.get("hellos")
            .then(r => {
                setText(r.data.text);
            });
    }, []);

    const status = isSignedIn ? "ログイン完了！" : "ログインしていません";

    return (
        <div className="top-page">
            <h1>easy-post</h1>
            <p>server response is "{text}"!!!</p>
            <p>{status}</p>
        </div>
    )
}
