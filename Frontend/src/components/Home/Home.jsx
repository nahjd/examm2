import React from 'react'
import Navbar from "../Navbar/Navbar"
import About from "../About/About"
import News from "../News/News"
import Restaurant from '../Restaurant/Restaurant'
import Contact from "../Contact/Contact"
// import "/Home.scss"
const Home = () => {
  return ( 
    <>
    <Navbar />
<About/>
<News />
<Restaurant />
<Contact />
    </>
  )
}

export default Home