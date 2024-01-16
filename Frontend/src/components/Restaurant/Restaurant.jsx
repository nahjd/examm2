import React from 'react'
import "./Restaurant.scss"
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
                <h1>2002</h1> <br />
                <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
            </div>
            <div className="card12">
                <h1>2010</h1> <br />
                <p>Stpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium.</p>
            </div>
            <div className="card12">
                <h1>2018</h1> <br />
                <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
            </div>
        </div>
        <div className="image">
                <img src="https://preview.colorlib.com/theme/pulse/img/sign.png" alt="" />
            </div>
        

    </section>
   </>
  )
}

export default Restaurant