import React from "react";
import { Table } from "@mui/material";
import {TableContainer} from "@mui/material"
import { TableHead } from "@mui/material"
import { TableBody } from "@mui/material"
import { TableRow } from "@mui/material"
import { TableCell } from "@mui/material"
import { Button } from "@mui/material";


class TableData extends React.Component{
  constructor(props){
    super(props)

    this.state={
      handleRemove : []
    }
    // this.handleDelete = this.handleDelete.bind(this)
  }

  
    render(){

      // console.log(this.props.data)
        return (
        <>
           <TableContainer >
            <Table sx={{ mt: 3 }} size="small">
              <TableHead>
                <TableRow>
                  <TableCell align="center" sx={{fontWeight:600}}>S. No.</TableCell>
                  <TableCell align="center" sx={{fontWeight:600}}>Name</TableCell>
                  <TableCell align="center" sx={{fontWeight:600}}>Email</TableCell>
                  <TableCell align="center" sx={{fontWeight:600}}>Address</TableCell>
                  <TableCell align="center" sx={{fontWeight:600}}>Phone</TableCell>
                  <TableCell align="center" sx={{fontWeight:600}}>Update</TableCell>
                  <TableCell align="center" sx={{fontWeight:600}}>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  
                    this.props.data.map((info,index)=>{
                      return(
                        <>
                    <TableRow key={index}>
                      <TableCell align="center" sx={{fontWeight:400}}>{index+1}</TableCell>
                      <TableCell align="center" sx={{fontWeight:400}}>{info.name}</TableCell>
                      <TableCell align="center" sx={{fontWeight:400}}>{info.email}</TableCell>
                      <TableCell align="center" sx={{fontWeight:400}}>{info.address}</TableCell>
                      <TableCell align="center" sx={{fontWeight:400}}>{info.phone}</TableCell>
                      <TableCell align="center" >
                        <Button variant="contained" size="small" color="success" onClick={()=>this.props.update(index)}><b>Update</b></Button>
                        </TableCell>
                      <TableCell align="center" >
                        <Button variant="contained" size="small" color="error" onClick={()=>this.props.delete(index)}><b>Delete</b></Button>
                        </TableCell>
                    </TableRow>
                    </>
                      )
                  }
                    )
                }
              </TableBody>
            </Table>
           </TableContainer>
        </>
        )
    }
}
export default TableData