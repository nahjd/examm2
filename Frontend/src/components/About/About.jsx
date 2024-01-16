import React from 'react'
import "./About.scss"
const About = () => {
  return (
    <>
    <section className='container'>
        <div className="About">
      <hr className='hrr' style={{width:"250px", color:"yellow", position:"relative", left:"570px", top:"30px"}} />  
      <h1>Welcome</h1>
      <hr className='hrr' style={{width:"250px", color:"yellow", position:"relative", right:"-1085px", bottom:"25px"}} /> 
        </div>
        <div className="cards">
            <div className="card1">
                <h1>2002</h1> <br />
                <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
            </div>
            <div className="card1">
                <h1>2010</h1> <br />
                <p>Stpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium.</p>
            </div>
            <div className="card1">
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

export default About