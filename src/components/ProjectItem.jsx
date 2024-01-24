import React from 'react'
import { useNavigate } from 'react-router-dom'
function ProjectItem({image,name,id}) {

  const navigate = useNavigate()
  return (
    <div className='projectItem' 
    onClick={()=>{
      navigate('/project/' +id)
    }}
    style={{display:"flex",
    flexWrap:'wrap',
    
    justifyContent: "center"}}>
        <h1>
            {name}
            </h1>
        
        <div style={{background:`url(${image})`,width: '100%',
        height: "100%",
        display: "flex",
        flexDirection:'column',
        justifyContent:"center",
        alignItems:"center",
        backgroundSize:"contain",
        backgroundRepeat: "no-repeat",
        }}
        className='bgImage'>
        </div>
    </div>
  )
}

export default ProjectItem