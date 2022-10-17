import { Box, Button, Grid, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { FieldArray, Formik } from "formik";

import FormikController from "./FormikController";
import { opdInitialValues, OPDTypes, Service } from "../utils/InitialValues";
import { opdValidationSchema } from "../utils/FieldValidation";
import { consultantOptions, serviceOptions } from "../utils/SelectOptions";

function OpdBooking() {

    const onSubmit = (values: OPDTypes) => {
        console.log(values);
    }

    return (
        <Formik
            initialValues={opdInitialValues}
            validationSchema={opdValidationSchema}
            onSubmit={onSubmit}
        >
            {
                (formik) => {
                    const { handleSubmit, values } = formik;

                    let grandTotal = 0;
                    values.services.map((service) => {
                        grandTotal = Number(grandTotal) + Number(service.total);
                    });

                    return (
                        <form onSubmit={handleSubmit}>
                            <Box sx={{ background: "#f6f6f6", p: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Box sx={{ px: 5, py: 1, background: "#fff", borderRadius: "10px", maxWidth: "fit-content" }}>
                                            <Typography variant="h6">Search Patient</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <Stack direction={"column"} spacing={1}>
                                            <Typography variant="subtitle2"><u>OPD Registration Details</u></Typography>
                                            <FormikController
                                                control="date"
                                                label="Date*"
                                                placeholder="MM/DD/YYYY"
                                                name="age"
                                            />
                                            <FormikController
                                                control="select"
                                                label="Consultant"
                                                name="consultant"
                                                options={consultantOptions}
                                            />
                                            <FormikController
                                                control="input"
                                                type="text"
                                                label="Referred By"
                                                placeholder="Enter Referred By"
                                                name="referredby"
                                            />
                                        </Stack>
                                    </Grid>
                                </Grid>
                                <TableContainer sx={{ my: 1, borderRadius: "5px" }}>
                                    <Table>
                                        <TableHead sx={{ background: "red" }}>
                                            <TableRow>
                                                <TableCell size="small">#</TableCell>
                                                <TableCell size="small">Name</TableCell>
                                                <TableCell size="small">Rate (Rs.)</TableCell>
                                                <TableCell size="small">Qty</TableCell>
                                                <TableCell size="small">Unit</TableCell>
                                                <TableCell size="small">Discount</TableCell>
                                                <TableCell size="small">Total (Rs.)</TableCell>
                                                <TableCell size="small">Remark</TableCell>
                                                <TableCell size="small"></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <FieldArray name="services">
                                                {
                                                    (fieldArrayProps) => {
                                                        // console.log({ fieldArrayProps });
                                                        const { push, remove, form } = fieldArrayProps;
                                                        const { values } = form;
                                                        const { services } = values;
                                                        return <>
                                                            {
                                                                services.map((_: Service, index: number) => (<TableRow key={index}>
                                                                    <TableCell size="small">{index + 1}</TableCell>
                                                                    <TableCell size="small">
                                                                        <FormikController
                                                                            control="select"
                                                                            name={`services[${index}].serviceName`}
                                                                            options={serviceOptions}
                                                                        />
                                                                    </TableCell>
                                                                    <TableCell size="small" >
                                                                        <FormikController
                                                                            control="input"
                                                                            type="text"
                                                                            name={`services[${index}].rate`}
                                                                        />
                                                                    </TableCell>
                                                                    <TableCell size="small" >
                                                                        <FormikController
                                                                            control="input"
                                                                            type="text"
                                                                            name={`services[${index}].qty`}
                                                                        />
                                                                    </TableCell>
                                                                    <TableCell size="small" >Unit</TableCell>
                                                                    <TableCell size="small" >Discount</TableCell>
                                                                    <TableCell size="small" >
                                                                        <FormikController
                                                                            control="input"
                                                                            type="text"
                                                                            name={`services[${index}].total`}
                                                                        />
                                                                    </TableCell>
                                                                    <TableCell size="small" >
                                                                        <FormikController
                                                                            control="input"
                                                                            type="text"
                                                                            name={`services[${index}].remark`}
                                                                        /></TableCell>
                                                                    <TableCell size="small" >
                                                                        <Stack>
                                                                            {
                                                                                services.length > 1 && <button type="button" onClick={() => remove(index)}>-</button>
                                                                            }
                                                                            <button type="button" onClick={() => push("")}>+</button>
                                                                        </Stack>

                                                                    </TableCell>
                                                                </TableRow>))
                                                            }
                                                        </>
                                                    }
                                                }
                                            </FieldArray>
                                            <TableRow>
                                                <TableCell size="small"></TableCell>
                                                <TableCell size="small"></TableCell>
                                                <TableCell size="small"></TableCell>
                                                <TableCell size="small"></TableCell>
                                                <TableCell size="small"></TableCell>
                                                <TableCell size="small">GrandTotal</TableCell>
                                                <TableCell size="small">Rs. {grandTotal}.00</TableCell>
                                                <TableCell size="small"></TableCell>
                                                <TableCell size="small"></TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <Box sx={{ my: 1, display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                                    <Button size="large" color="success" type="submit" variant="contained" disableElevation>Submit</Button>
                                </Box>
                            </Box>
                        </form>
                    )
                }
            }
        </Formik>
    )
}

export default OpdBooking;