import React, {useDebugValue, useEffect, useState} from "react";
import axios from "axios";

export default function TopPage() {
    const [text, setText] = useState<string>("");
    const url = "http://localhost:3001/hellos";
    useEffect(() => {
        axios.get(url)
            .then(r => {
                console.log(r.data);
                setText(r.data.text);
            })
    }, []);

    return (
        <div className="top-page">
            <h1>easy-post</h1>
            <p>server response is "{text}"</p>
        </div>
    )
}
