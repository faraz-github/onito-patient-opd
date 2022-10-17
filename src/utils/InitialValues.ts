type Sex = "Male" | "Female" | "";

interface Identity {
    type: string;
    number: string;
}

export interface Values {
    name: string;
    sex: Sex;
    birthDate: any;
    mobile: string;
    identity: Identity;
    guardianLabel: string;
    guardianName: string;
    email: string;
    emergencyMobile: string;
    address: string;
    state: string;
    city: string;
    country: string;
    pincode: string;
    occupation: string;
    religion: string;
    maritalStatus: string;
    bloodGroup: string;
    nationality: string;
}

export const initialValues: Values = {
    name: "",
    sex: "",
    birthDate: null,
    mobile: "",
    identity: {
        type: "",
        number: ""
    },
    guardianLabel: "",
    guardianName:"",
    email: "",
    emergencyMobile: "",
    address: "",
    state: "",
    city: "",
    country: "India",
    pincode: "",
    occupation: "",
    religion: "",
    maritalStatus: "",
    bloodGroup: "",
    nationality: "India",
};