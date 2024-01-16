import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import "./Contact.scss"


const Contact = () => {
  const [data, setData] = useState("")

  useEffect(() => {
    axios("http://localhost:3030/people").then((res)=>{
     setData(res.data)
    })
   }, [])
   console.log(data);
  return (
  
     <> <div className="About3">
    <img style={{position:"absolute"}} src="https://preview.colorlib.com/theme/pulse/img/menu-bg.jpg" alt="" />
      <hr className='hrr2' style={{width:"250px", color:"orange", position:"relative", left:"510px", top:"30px",marginTop:"355px"}} />  
      <h1 style={{color:"white", marginRight:"10px", fontSize:"45px"}}>Our Menu</h1>
      <hr className='hrr2' style={{width:"250px", color:"orange", position:"relative", right:"-1085px", bottom:"-25px"}} /> 
    
        </div>

          <TableContainer style={{marginBottom:"60px", position:"absolute", backgroundColor:"white"}} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell >Price</TableCell>
                <TableCell >About</TableCell>
          
           
              </TableRow>
            </TableHead>
            <TableBody>
              {data && data.map((elem,i) => (
                <TableRow
                  key={i}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {elem.name}
                  </TableCell>
             
                  <TableCell align="right">{elem.about}</TableCell>
                  <TableCell align="right">{elem.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            
          </Table>
        </TableContainer>
        
        
      
        
  </>
  )
}

export default Contact