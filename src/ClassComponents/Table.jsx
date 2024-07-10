import React from "react";
import { Table } from "@mui/material";
import {TableContainer} from "@mui/material"
import { TableHead } from "@mui/material"
import { TableRow } from "@mui/material"
import { TableCell } from "@mui/material"
import {Paper} from "@mui/material"


class TableData extends React.Component{
    render(){
        return (
        <>
           <TableContainer component={Paper}>
            <Table size="small" sx={{ mt: 3 }} aria-label="customized table">
              <TableHead sx={{backgroundColor:"black"}}>
                <TableRow>
                  <TableCell align="center" sx={{color:"white", fontWeight:600}}>S. No.</TableCell>
                  <TableCell align="center" sx={{color:"white", fontWeight:600}}>Name</TableCell>
                  <TableCell align="center" sx={{color:"white", fontWeight:600}}>Email</TableCell>
                  <TableCell align="center" sx={{color:"white", fontWeight:600}}>Address</TableCell>
                  <TableCell align="center" sx={{color:"white", fontWeight:600}}>Phone</TableCell>
                </TableRow>
              </TableHead>

            </Table>
           </TableContainer>
        </>
        )
    }
}
export default TableData