import "./app.css";

import { Container } from "@mui/material";
import Registration from "./components/Registration";
import DataTable from "./components/DataTable";

import { dataSet } from "./utils/Dataset";

function App() {
  return (
    <Container>
      <DataTable data={dataSet} />
    </Container>
  );
}

export default App;
