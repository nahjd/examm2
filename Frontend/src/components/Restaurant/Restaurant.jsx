import React from 'react'
import "./Restaurant.scss"
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { MdBrunchDining } from "react-icons/md";
import { MdLunchDining } from "react-icons/md";
import { MdDinnerDining } from "react-icons/md";
const Restaurant = () => {
  return (
   <>
      <section className='container2'>
        <div className="About2">
      <hr className='hrr1' style={{width:"250px", color:"orange", position:"relative", left:"510px", top:"30px"}} />  
      <h1>Our Services</h1>
      <hr className='hrr1' style={{width:"250px", color:"orange", position:"relative", right:"-1085px", bottom:"-25px"}} /> 
        </div>
        <div className="cards1">
            <div className="card12">
            <MdOutlineFreeBreakfast style={{fontSize:"55px", color:"brown", position:"absolute", left:"355px", bottom:"95px"}} /> <br />
                <h1>BreakFast</h1> <br />
                <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
            </div>
            <div className="card12">
            <MdBrunchDining  style={{fontSize:"55px", color:"brown", position:"absolute", left:"735px", bottom:"115px"}}/>
                <h1>Brunch</h1> <br />
                <p>Stpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium.</p>
            </div>
            <div className="card12">
            <MdLunchDining  style={{fontSize:"55px", color:"brown", position:"absolute", left:"1115px", bottom:"110px"}}/>
                <h1>Lunch</h1> <br />
                <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
            </div>
            <div className="card12">
            <MdDinnerDining  style={{fontSize:"55px", color:"brown", position:"absolute", left:"1489px", bottom:"110px"}}/>
                <h1>Dinner</h1> <br />
                <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
            </div>
        </div>
    
        

    </section>
   </>
  )
}

export default Restaurant