import React from "react"
import { Button } from "@mui/material"
import { FormControl } from "@mui/material"
import {TextField} from "@mui/material"


class Form extends React.Component{
    render(){
      return(
        <>
        
            <FormControl>

          <TextField label="Name"
            variant="outlined"
            sx={{  mt: 7, ml:7 }}
            size="small"/>

          <TextField label="Email"
            variant="outlined"
            sx={{  mt: 1, ml:7 }}
            size="small"/>

        <TextField label="Address"
            variant="outlined"
            sx={{  mt: 1, ml:7 }}
            size="small"/>

        <TextField label="Phone"
            variant="outlined"
            sx={{  mt: 1, ml:7 }}
            size="small"/>

          <Button variant="contained" size="large" sx={{  mt: 3, ml:7 }}>Button</Button>

          </FormControl> 
          
        </>
      )
    }
  }
  export default Form