import React from 'react'
import ProjectItem from '../components/ProjectItem'
// import Project1 from '../assets/Amazon-Clone.png'
// import Project2 from '../assets/React-Projects.png'
import {ProjectList} from '../helpers/ProjectList'
import '../styles/Projects.css'

function Projects() {
  return (<>
    <div className='projects' style={{display:"flex", flexDirection:'column',justifyContent:"flex-start"}}>
      <h1>My Personal Projects</h1>
      <div className="projectList"></div>
      {/* <ProjectItem name="Amazon Clone" image={Project1} />
      <ProjectItem name="React Project" image={Project2} /> */}
      {ProjectList.map((project, idx)=>{
          return  <ProjectItem id ={idx} name={ project.name} image ={project.image}/>
      })}
      </div>
    </>
  )
}

export default Projects