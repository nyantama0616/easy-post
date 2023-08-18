import React from "react";
import { Stack, TextField, Button } from "@mui/material"
import { useForm, SubmitHandler, Controller, FieldValues } from "react-hook-form"

type FormTarget = {
    name: string;
    type: string
    label: string
};
type FormProps = {
    onSubmit: SubmitHandler<any>;
    targets: FormTarget[];
    validationRules: { [key: string]: any }
    submitButtonValue: string
};
export default function Form({onSubmit, targets, validationRules, submitButtonValue}: FormProps) {
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<FieldValues>(); //デフォルト値がないせいでwarning出るけど、まあいいかな？

    const elements = targets.map((target, i) => {
        return <Controller
            key={i}
            name={target.name}
            control={control}
            rules={validationRules[target.name]}
            render={({ field }) => (
                <TextField
                    {...field}
                    type={target.type}
                    label={target.label}
                    error={errors[target.name] !== undefined}
                    // helperText={errors[target.name]?.message}
                />
            )}
        />
    });

    return (
        <Stack component="form" noValidate
            onSubmit={handleSubmit(onSubmit)}
            spacing={2} sx={{ m: 2, width: "25ch" }}>

            {elements}
            
            <Button variant="contained" type="submit">
                {submitButtonValue}
            </Button>
        </Stack>
    )
}
