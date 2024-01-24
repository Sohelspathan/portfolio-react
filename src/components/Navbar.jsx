import React, { useEffect, useState } from 'react'
import {Link,useLocation } from 'react-router-dom'
import '../styles/navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';
function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false)

    const location = useLocation();
    // console.log(location);
    useEffect(()=>{
        setExpandNavbar(false);
    },[location])
  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
        <div className="toggleButton" style={{float: 'right'}}>
            <button onClick={()=>{
                setExpandNavbar((prev) =>!prev)
            }}  >
                <ReorderIcon />
            </button>
        </div>
        <div className="links">
            <Link to ="/">Home</Link>
            <Link to ="/projects">Projects</Link>
            <Link to ="/experience">Experience</Link>
            <Link to ="/contactus">Contact Me</Link>
        </div>
    </div>
  )
}

export default Navbar