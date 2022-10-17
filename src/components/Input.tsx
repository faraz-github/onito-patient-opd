import { Stack } from "@mui/material";
import { Field } from "formik";

interface Props {
    label?: string;
    name?: string;
    placeholder?: string;
}

function Input(props: Props) {
    const { label, name, placeholder, ...rest } = props;
    return (
        <>
            {
                (label !== "")
                    ? <Stack direction={"row"} spacing={2} alignItems={"center"}>
                        <label htmlFor={name}>{label}</label>
                        <Field id={name} name={name} placeholder={placeholder} {...rest} style={{ width: "100%" }} />
                    </Stack>
                    : <Field id={name} name={name} placeholder={placeholder} {...rest} style={{ width: "100%" }} />
            }
        </>
    )
}

export default Input;