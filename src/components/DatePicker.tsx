import { Box, Stack } from "@mui/material";
import { Field, ErrorMessage } from "formik";

import DatePickerView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
    label?: string;
    name?: string;
    placeholder?: string;
}

function DatePicker(props: Props) {

    const { label, name, placeholder, ...rest } = props;

    return (
        <Stack direction={"row"} spacing={2}>
            <label htmlFor={name}>{label}</label>
            <Stack style={{ width: "100%" }}>
                <Field name={name}>
                    {
                        ({ form, field }: any) => {
                            const { setFieldValue } = form;
                            const { value } = field;
                            return <Box className="customDatePickerWidth">
                                <DatePickerView
                                    id={name}
                                    placeholderText={placeholder}
                                    {...field}
                                    {...rest}
                                    selected={value}
                                    onChange={(data) => setFieldValue(name, data)}
                                />
                            </Box>
                        }
                    }
                </Field>
                <ErrorMessage className="invalidInput" name={name} component="div" />
            </Stack>
        </Stack>
    )
}

export default DatePicker;