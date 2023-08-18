import React from "react";
import { Stack, TextField, Button } from "@mui/material"
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { useHttpRequest } from "../../hooks/useHttpRequest";

type FormData = {
    eMail: string;
    password: string;
};
export default function SignUpPage() {
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({
        defaultValues: { eMail: "", password: "" }
    });

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
        }
    };

    const hr = useHttpRequest();
    const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
        console.log(`eMail: ${data.eMail}\npassword: ${data.password}`);
        const params = {
            e_mail: data.eMail,
            password: data.password
        }
        hr.post("/users", params)
            .then(r => {
                console.log(r.status);
            })
            .catch(e => {
                console.log(e);
                
            });
    }

    return (
        <div className="sign-up-page">
            <h1>sign up</h1>
            <Stack component="form" noValidate
                onSubmit={handleSubmit(onSubmit)}
                spacing={2} sx={{ m: 2, width: "25ch" }}>

                <Controller
                    name="eMail"
                    control={control}
                    rules={validationRules.eMail}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            type="text"
                            label="E-mail"
                            error={errors.eMail !== undefined}
                            helperText={errors.eMail?.message}
                        />
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    rules={validationRules.password}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            type="password"
                            label="Password"
                            error={errors.password !== undefined}
                            helperText={errors.password?.message}
                        />
                    )}
                />
                <Button variant="contained" type="submit">
                    送信する
                </Button>
            </Stack>
        </div>
    )
}
