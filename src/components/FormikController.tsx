import Input from "./Input";
import Select from "./Select";
import DatePicker from "./DatePicker";

interface Option {
    key: string;
    value: string;
}
interface Props {
    control: string;
    type?: string;
    label?: string;
    name?: string;
    placeholder?: string;
    options?: Option[];
}

function FormikController(props: Props) {
    const { control, ...rest } = props;
    switch (control) {
        case "input":
            return <Input {...rest} />;
        case "select":
            return <Select {...rest} />;
        case "date":
            return <DatePicker {...rest} />;
        default:
            return null;
    }
}

export default FormikController;