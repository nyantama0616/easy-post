import React, { useContext, useEffect } from "react";
import { useHttpRequest } from "../../hooks/useHttpRequest";
import { useSignIn } from "../../hooks/useSignIn";
import { useNavigate } from "react-router-dom";
import { SignedInContext } from "../../context/AuthContextProvider";
import Form from "../organisms/Form";

type FormData = {
    eMail: string;
    password: string;
    passwordConfirmation: string;
};
export default function SignInPage() {
    const isSignedIn = useContext(SignedInContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (isSignedIn) {
            navigate("/");
        }
    }, [isSignedIn]);

    const validationRules = {
        eMail: {
            required: "メールアドレスを入力してください",
        },

        password: {
            required: "パスワードを入力してください",
        }
    };

    const hr = useHttpRequest();
    const { signIn } = useSignIn();
    const onSubmit = (data: FormData) => {
        signIn(data.eMail, data.password)
            .then(() => {
                console.log("sign in success");
            })
            .catch(() => {
                console.log("fail!");
            });
    }

    const targets = [
        {
            name: "eMail",
            type: "text",
            label: "E-mail"
        },
        {
            name: "password",
            type: "password",
            label: "Password"
        },
    ]

    return (
        <div className="sign-up-page">
            <Form
                onSubmit={onSubmit}
                targets={targets}
                validationRules={validationRules}
                submitButtonValue="サインイン"
            />
        </div>
    )
}
