import React, {useDebugValue, useEffect, useState} from "react";
import axios from "axios";
import { useHttpRequest } from "../../hooks/useHttpRequest";

export default function TopPage() {
    const [text, setText] = useState<string>("");
    const hr = useHttpRequest();
    useEffect(() => {
        hr.get("hellos")
            .then(r => {
                setText(r.data.text);
            });
    }, []);

    return (
        <div className="top-page">
            <h1>easy-post</h1>
            <p>server response is "{text}"!!!</p>
        </div>
    )
}
