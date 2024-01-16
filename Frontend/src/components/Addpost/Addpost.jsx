import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
export default function BasicTextFields() {

 const [word, setWord] = useState("")
 const [data, setData] = useState("")
 const [search, setSearch] = useState("")

useEffect(() => {
 axios.get("http://localhost:3030/people").then((res)=>{
    console.log(res.data)
    setData(res.data)
 })
}, [])


  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={(e)=>{
         setWord(e.target.value)
      }} 
      id="outlined-basic" label="Outlined" variant="outlined" />
       <TextField onChange={(e)=>{
         setSearch(e.target.value)
      }} 
      id="outlined-basic" label="Outlined" variant="outlined" />

<Button 

onClick={()=>{
    let obj = {
        name:String,
        price:String,
        about:String,

    }
    axios.post("http://localhost:3030/people" , obj)
}}
   
    
     variant="contained">Add</Button>
    </Box>
  );
}