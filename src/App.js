import React from "react";
import Form from "./ClassComponents/Form";
import { Grid } from "@mui/material";
import TableData from "./ClassComponents/Table";
class App extends React.Component{
  render(){
    return(
      <>
      <Grid container spacing={2}>

      <Grid item xs={8} md={0.5}></Grid>
      <Grid item xs={8} md={3.5}>
            <Form/>
      </Grid>
      <Grid item xs={6} md={7.5}>
            <TableData/>
      </Grid>

      <Grid item xs={6} md={0.5}></Grid>

      </Grid>
      </>
    )
  }
}
export default App