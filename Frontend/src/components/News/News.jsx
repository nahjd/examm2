import React from 'react'
import "./News.scss"
const News = () => {
  return (
    <>
    <section>
    <div className="container">
        <img src="https://preview.colorlib.com/theme/pulse/img/review-bg.jpg" alt="" />
    </div>
    <div className="About">
      <hr className='hrr' style={{width:"250px", color:"yellow", position:"relative", left:"550px", top:"35px"}} />  
      <h1>Testimonials</h1>
      <hr className='hrr' style={{width:"250px", color:"yellow", position:"relative", right:"-1115px", bottom:"28px"}} /> 
        </div> <br /> <br />
        <div className="texp">
        <p>Integer sed facilisis eros. In iaculis rhoncus velit in malesuada. <br /> In hac habitasse platea dictumst. Fusce erat ex, consectetur sit amet ornare suscipit, porta et erat. <br /> Donec nec nisi in nibh commodo laoreet. Mauris dapibus justo ut feugiat malesuada. Fusce ultricies ante tortor, non vestibulum est feu-giat ut. </p>
        </div>
       
    </section>
  
    </>
  )
}

export default News