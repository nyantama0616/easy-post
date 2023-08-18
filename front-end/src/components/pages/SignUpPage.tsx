import React from "react";
import { useHttpRequest } from "../../hooks/useHttpRequest";
import Form from "../organisms/Form";

type FormData = {
    eMail: string;
    password: string;
    passwordConfirmation: string;
};
export default function SignUpPage() {
    const validationRules = {
        eMail: {
            required: "メールアドレスを入力してください",
            pattern: {
                value: /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/g,
                message: "メールアドレスの形式が無効です"
            }
        },
        
        password: {
            required: "パスワードを入力してください",
            minLength: { value: 4, message: "4文字以上のパスワードを設定してください" }
        },
        
        passwordConfirmation: {
            required: "パスワードをもう一度入力してください",
        }
    };

    const hr = useHttpRequest();
    const onSubmit = (data: FormData) => {
        const params = {
            user: {
                e_mail: data.eMail,
                password: data.password,
                password_confirmation: data.passwordConfirmation
            }
        };

        hr.post("/users", params)
            .then(r => {
                console.log(r.status);
            })
            .catch(e => {
                console.log(e);
                console.log(e.response.data);
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
        {
            name: "passwordConfirmation",
            type: "password",
            label: "Password confirmation"
        },
    ]

    return (
        <div className="sign-up-page">
            <h1>sign up</h1>
            <Form
                onSubmit={onSubmit}
                targets={targets}
                validationRules={validationRules}
                submitButtonValue="サインイン"
            />
        </div>
    )
}
