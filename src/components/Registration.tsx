import { Alert, Box, Button, Grid, Typography, Stack } from "@mui/material";
import { Formik, ErrorMessage } from "formik";
import axios from "axios";

import { initialValues, Values } from "../utils/InitialValues";
import { validationSchema } from "../utils/FieldValidation";
import { sexOptions, identityOptions, guardianOptions, stateOptions, cityOptions, religionOptions, maritalOptions, bloodOptions } from "../utils/SelectOptions";

import FormikController from "./FormikController";

function Registration() {

    const onSubmit = async (values: Values) => {
        console.log("Submitted");
        try {
            const response = await axios.post("https://httpbin.org/post", values);
            const data = JSON.parse(response.data.data);
            console.log(data);

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {(formik) => {
                const { handleSubmit, errors } = formik;
                
                return (
                    <form onSubmit={handleSubmit}>
                        <Box>
                            <Typography variant="h5" gutterBottom>Personal Details</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6} lg={5}>
                                    <FormikController
                                        control="input"
                                        type="text"
                                        label="Name*"
                                        placeholder="Enter Name"
                                        name="name"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} lg={4}>
                                    <FormikController
                                        control="date"
                                        label="Date of Birth or Age*"
                                        placeholder="MM/DD/YYYY or Age in Years"
                                        name="birthDate"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} lg={3}>
                                    <FormikController
                                        control="select"
                                        label="Sex*"
                                        name="sex"
                                        options={sexOptions}
                                    />
                                </Grid>
                            </Grid>
                            <Grid my={1} container spacing={2}>
                                <Grid item xs={12} md={6} lg={5}>
                                    <FormikController
                                        control="input"
                                        type="text"
                                        label="Mobile"
                                        placeholder="Enter Mobile"
                                        name="mobile"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} lg={4}>
                                    <FormikController
                                        control="select"
                                        label="Govt Issued ID"
                                        name="identity.type"
                                        options={identityOptions}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} lg={3}>
                                    <FormikController
                                        control="input"
                                        label=""
                                        placeholder="Enter Govt ID"
                                        name="identity.number"
                                    />
                                </Grid>
                            </Grid>
                            <Typography variant="h5" gutterBottom>Contact Details</Typography>
                            <Grid mb={1} container spacing={2}>
                                <Grid item xs={12} md={6} lg={3}>
                                    <FormikController
                                        control="select"
                                        label="Guardian Details"
                                        name="guardianLabel"
                                        options={guardianOptions}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} lg={2}>
                                    <FormikController
                                        control="input"
                                        label=""
                                        placeholder="Enter Guardian Name"
                                        name="guardianName"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} lg={3}>
                                    <FormikController
                                        control="input"
                                        label="Email"
                                        placeholder="Enter Email"
                                        name="email"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} lg={4}>
                                    <FormikController
                                        control="input"
                                        label="Emergency Contact Number"
                                        placeholder="Enter Emergency No"
                                        name="emergencyMobile"
                                    />
                                </Grid>
                            </Grid>
                            <Typography variant="h5" gutterBottom>Address Details</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6} lg={5}>
                                    <FormikController
                                        control="input"
                                        type="text"
                                        label="Address"
                                        placeholder="Enter Address"
                                        name="address"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} lg={4}>
                                    <FormikController
                                        control="select"
                                        label="State"
                                        name="state"
                                        options={stateOptions}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} lg={3}>
                                    <FormikController
                                        control="select"
                                        label="City"
                                        name="city"
                                        options={cityOptions}
                                    />
                                </Grid>
                            </Grid>
                            <Grid my={1} container spacing={2}>
                                <Grid item xs={12} md={6} lg={5}>
                                    <FormikController
                                        control="input"
                                        type="text"
                                        label="Country"
                                        name="country"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} lg={3}>
                                    <FormikController
                                        control="input"
                                        type="text"
                                        label="Pincode"
                                        placeholder="Enter Pincode"
                                        name="pincode"
                                    />
                                </Grid>
                            </Grid>
                            <Typography variant="h5" gutterBottom>Other Details</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6} lg={3}>
                                    <FormikController
                                        control="input"
                                        type="text"
                                        label="Occupation"
                                        placeholder="Enter Occupation"
                                        name="occupation"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} lg={3}>
                                    <FormikController
                                        control="select"
                                        label="Religion"
                                        name="religion"
                                        options={religionOptions}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} lg={3}>
                                    <FormikController
                                        control="select"
                                        label="Marital Status"
                                        name="maritalStatus"
                                        options={maritalOptions}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} lg={3}>
                                    <FormikController
                                        control="select"
                                        label="Blood Group"
                                        name="bloodGroup"
                                        options={bloodOptions}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} lg={3}>
                                    <FormikController
                                        control="input"
                                        type="text"
                                        label="Nationality"
                                        name="nationality"
                                    />
                                </Grid>
                            </Grid>
                        </Box>

                        <Box sx={{ my: 1, display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                            {
                                errors.name
                                    ?
                                    <Alert severity="error" sx={{ width: "100%", mr: 1 }}>
                                        <ErrorMessage name="name" />
                                    </Alert>
                                    :
                                    errors.birthDate
                                        ?
                                        <Alert severity="error" sx={{ width: "100%", mr: 1 }}>
                                            <ErrorMessage name="birthDate" />
                                        </Alert>
                                        :
                                        errors.mobile
                                            ?
                                            <Alert severity="error" sx={{ width: "100%", mr: 1 }}>
                                                <ErrorMessage name="mobile" />
                                            </Alert>
                                            :
                                            errors.guardianLabel
                                                ?
                                                <Alert severity="error" sx={{ width: "100%", mr: 1 }}>
                                                    <ErrorMessage name="guardianLabel" />
                                                </Alert>
                                                : null
                            }

                            <Stack direction={"row"} spacing={1}>
                                <Button size="large" color="error" type="reset" variant="outlined" disableElevation>Cancel</Button>
                                <Button size="large" color="success" type="submit" variant="contained" disableElevation>Submit</Button>
                            </Stack>
                        </Box>
                    </form>
                );
            }}
        </Formik >
    )
}

export default Registration;