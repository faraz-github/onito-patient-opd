import { useEffect, useRef } from "react";
import $ from "jquery";
import { Box } from "@mui/material";

interface Props {
    data: any;
}

function DataTable(props: Props) {

    $.DataTable = require('datatables.net')
    const tableRef: any = useRef()

    useEffect(() => {
        // console.log(tableRef.current) Debug Log
        const table = $(tableRef.current).DataTable(
            {
                data: props.data,
                columns: [
                    { title: "Name" },
                    { title: "Position" },
                    { title: "Office" },
                    { title: "Extn." },
                    { title: "Start data" },
                    { title: "Salary" }
                ]
            }
        )
        return function () {
            // console.log("Table destroyed") Debug Log
            table.destroy()
        }
    }, [])
    return (
        <Box sx={{ border: "1px solid black", borderRadius: "25px", p:2 }}>
            <table width="100%" ref={tableRef}></table>
        </Box>
    )
}

export default DataTable;