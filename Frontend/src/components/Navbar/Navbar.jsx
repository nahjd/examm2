import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { MdOutlineLocalPhone } from "react-icons/md";
import {Link} from "react-router-dom"

import "./Navbar.scss"
const Navbar = () => {
  return (
    <>
     <Box sx={{ flexGrow: 1  }}>
        
    <AppBar className='navbar' style={{backgroundColor:"transparent", }} position="static">
    <img style={{position:"absolute", width:"100%", height:"100vh"}} src="https://preview.colorlib.com/theme/pulse/img/slider/slider-2.jpg" alt="" />
  
      <Toolbar>
    
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2,  }}
        >
       
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize:"25px", marginBottom:"25px" }}>
          Pulse <span style={{color:"orange", height:"1px", fontSize:"55px"}}>.</span>
        </Typography>
        <div className="buttons">
            <Link to="/">
            <button style={{border:"none", color:"white",  cursor:"pointer",backgroundColor:"transparent" , fontSize:"21px",}}>Home</button>
            </Link>
       <Link to="/about">
       <button  style={{border:"none", color:"white", cursor:"pointer",backgroundColor:"transparent" , fontSize:"21px",}}>About us</button>
       </Link>
      <Link to="/restaurant">
      <button  style={{border:"none", color:"white", backgroundColor:"transparent" ,cursor:"pointer", fontSize:"21px"}}>Restaurant</button>
      </Link>
      <Link to="/news"> <button  style={{border:"none", color:"white", backgroundColor:"transparent" , cursor:"pointer", fontSize:"21px",}}>News</button></Link>
      <Link to="/contact"><button  style={{border:"none", color:"white", backgroundColor:"transparent" , cursor:"pointer", fontSize:"21px",}}>Contact</button></Link>
       
        </div>
   

        <div className="tel">
            <h4>Reservations</h4>
            <MdOutlineLocalPhone />
            <p>652-345 3222 11</p>
          
        </div>
    <hr className="hrcolor"/>
<div className="texttt">
<h1>Special Dish</h1> <span style={{width:"250px", height:"250px", position:"absolute",top:"-55px", left:"650px",color:"orange",width:"250px", fontSize:"185px"}}>.</span>
    <p>By Chef Francis Smith</p>
</div>
 
  
      </Toolbar>
  
    </AppBar>
    
  </Box>
    </>
   
  
  )
}

export default Navbar