import React from 'react'
import Navbar from "../Navbar/Navbar"
import About from "../About/About"
import News from "../News/News"
import Restaurant from '../Restaurant/Restaurant'
// import "/Home.scss"
const Home = () => {
  return ( 
    <>
    <Navbar />
<About/>
<News />
<Restaurant />
    </>
  )
}

export default Home