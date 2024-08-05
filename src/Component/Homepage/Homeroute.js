import React from "react";
import HeaderTop from "./HeaderTop/HeaderTop";
import { Box } from "@mui/material"
import Footer from "./Footer/Footer";
import Banner from "./Banner/Banner";
import About from "./About/About";
import Contact from "./ContactUs/ContactUs";
const Homeroute =() =>{
    return(
        <Box> 
            <HeaderTop/>
            <Banner/>
            <About/>
            <Contact/>
            <Footer/>
           
            
        </Box>
    
    )
}

export default Homeroute 