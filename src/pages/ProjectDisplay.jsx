import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList';
import '../styles/projectDisplay.css'
import GithubIcon from '@mui/icons-material/Github';

function ProjectDisplay() {
    const {id} =useParams();
    const project =ProjectList[id]
    return (
    <>
    <div className='project'>
    <h1>{project.name}</h1>
            <img src={project.image}  />
            <p><b>Skills;</b> {project.skills} </p>
            <p id='para'>{project.description}</p>
        <GithubIcon/>
    </div>

    </>
  )
}

export default ProjectDisplay