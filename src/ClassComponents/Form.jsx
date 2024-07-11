import React from "react"
import { Button } from "@mui/material"
import { FormControl } from "@mui/material"
import {TextField} from "@mui/material"
import TableData from "./Table"
import { Grid } from "@mui/material";

class Form extends React.Component{
constructor(){
  super()

  this.state={
    submitButton:false,
    name: "",
    email: "",
    address:"",
    phone:"",
    data:[],
    updatedData:{}
   
  }

  this.handleSubmit = this.handleSubmit.bind(this)
  this.handleDelete = this.handleDelete.bind(this)
  this.handleUpdate = this.handleUpdate.bind(this)
  this.handleUpdateTable = this.handleUpdateTable.bind(this)
}

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value });
  };

  handleSubmit(e){
    e.preventDefault()
    this.setState({data:[...this.state.data, this.state]})
    this.setState({
      name:"",
      email:"",
      address:"",
      phone:"",
      index:{}
    })
  }

  handleDelete = (index) => {
   this.setState({
    data : this.state.data.filter((v,i) => i !== index)
   })
  }

  handleUpdate = (index) => {
    this.setState({
      submitButton:true
    })
    let row = this.state.data
    let info = row[index]
    this.setState({
      name: info.name,
      email: info.email,
      address: info.address,
      phone: info.phone
    })
    this.setState({
      index: index
    })
   
    // this.setState({data:[...this.state.data, info]})
    // this.state.data[index] = info
    // row[index] = newRow
    // console.log(row[index], "new")
  }

  handleUpdateTable = () =>{
    console.log(this.state.data[this.state.index])
    this.setState({data:[this.state.data[this.state.index],this.state]})
    this.setState({
      index:""
    })
    this.setState({
      submitButton:false
    })
  } 
  
    render(){
      return(
        <>
        <Grid container spacing={2}>
        <Grid item xs={8} md={0.5}></Grid>
      
        <Grid item xs={8} md={3.5} align="center">
          <h2><u>Form</u></h2>
          <FormControl>

          <TextField label="Name"
            variant="outlined"
            sx={{  mt: 7 }}
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
            size="small"/>

          <TextField label="Email"
            variant="outlined"
            sx={{  mt: 1 }}
            value={this.state.email}
            onChange={this.handleChange}
            name="email"
            size="small"/>

        <TextField label="Address"
            variant="outlined"
            sx={{  mt: 1 }}
            value={this.state.address}
            onChange={this.handleChange}
            name="address"
            size="small"/>

        <TextField label="Phone"
            variant="outlined"
            sx={{  mt: 1 }}
            value={this.state.phone}
            onChange={this.handleChange}
            name="phone"
            size="small"/>
          
          {
            !this.state.submitButton?
            (
              <>
              <Button variant="contained" 
          size="large" 
          sx={{  mt: 3 }}
          onClick={this.handleSubmit}>
            Submit</Button>
              </>
            ):
            (
              <>
                <Button variant="contained" 
          size="large" 
          sx={{  mt: 3 }}
          color="warning"
          onClick={this.handleUpdateTable}>
            Update</Button>

              </>
            )
          }

          </FormControl> 
          </Grid>

          <Grid item xs={6} md={7.5} align="center">
          <h2><u>Table</u></h2>
          <TableData data={this.state.data} delete={this.handleDelete} update={this.handleUpdate}/>
          </Grid>

          <Grid item xs={6} md={0.5}></Grid>
          </Grid>
        </>
      )
    }
  }
  export default Form