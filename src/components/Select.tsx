import { Stack } from "@mui/material";
import { Field, ErrorMessage } from "formik";

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
        <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <label htmlFor={name}>{label}</label>
            <Stack>
                <Field as="select" id={name} name={name} {...rest}>
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
                <ErrorMessage className="invalidInput" name={name} component="div" />
            </Stack>
        </Stack>
    )
}

export default Select;