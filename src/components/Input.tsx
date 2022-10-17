import { Stack } from "@mui/material";
import { Field, ErrorMessage } from "formik";

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
                    ? <Stack direction={"row"} spacing={1} alignItems={"center"}>
                        <label htmlFor={name}>{label}</label>
                        <Stack>
                            <Field id={name} name={name} placeholder={placeholder} {...rest} style={{ width: "75%" }} />
                            <ErrorMessage className="invalidInput" name={name} component="div" />
                        </Stack>
                    </Stack>
                    : <Stack>
                        <Field id={name} name={name} placeholder={placeholder} {...rest} />
                        <ErrorMessage className="invalidInput" name={name} component="div" />
                    </Stack>
            }
        </>
    )
}

export default Input;