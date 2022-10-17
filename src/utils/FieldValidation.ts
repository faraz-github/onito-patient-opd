import * as yup from "yup";

const phoneRegExp = /^(0|91|\+91)?-?[789]\d{9}$/

export const validationSchema = yup.object({
    mobile: yup.string().matches(phoneRegExp, "Phone number is not valid"),
    name: yup.string().required("Name is required"),
    birthDate: yup.date().required("Age is required").nullable(),
    email: yup.string().email("Invalid email"),
    guardianName: yup.string(),
    guardianLabel: yup.string().when("guardianName", {
        is: (name: string) => name?.length > 0,
        then: yup.string().required("Please select label")
    })
});