import { Box, Stack } from "@mui/material";
import { Field } from "formik";

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
            <Field name={name} style={{ width: "100%" }}>
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
        </Stack>
    )
}

export default DatePicker;