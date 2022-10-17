import { Stack } from "@mui/material";
import { Field } from "formik";

interface Option {
    key: string;
    value: string;
}

interface Props {
    label?: string;
    name?: string;
    options?: Option[];
}

function Select(props: Props) {
    const { label, name, options, ...rest } = props;
    return (
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <label htmlFor={name}>{label}</label>
            <Field as="select" id={name} name={name} {...rest} style={{ width: "100%" }}>
                {
                    options?.map((option, index: number) => {
                        return (
                            <option key={index} value={option.value}>
                                {option.key}
                            </option>
                        )
                    })
                }
            </Field>
        </Stack>
    )
}

export default Select;