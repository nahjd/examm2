import Navbar from "../components/Navbar/Navbar"
import Home from "../components/Home/Home"
import About from "../components/About/About"
import Restaurant from "../components/Restaurant/Restaurant"
import News from "../components/News/News"
import Contact from "../components/Contact/Contact"
import Addpost from "../components/Addpost/Addpost"
export const routes = [
    {
    path:"/",
    children:[
    
        {
            path:"/navbar",
            element:<Navbar />
        },
        {
            path:"/",
            element:<Home />
        },
        {
            path:"/about",
            element:<About />
        },
        {
            path:"/restaurant",
            element:<Restaurant />
        },
        {
            path:"/news",
            element:<News />
        },
        {
            path:"/contact",
            element:<Contact />
        },
        {
            path:"/addpost",
            element:<Addpost />
        },
        
    ]
}
]

 

