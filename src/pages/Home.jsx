import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email'
import GithubIcon from '@mui/icons-material/Github'
import '../styles/home.css'
function Home() {
  return (<>
    <div className='home'>
      <div className="about">
        <h2>Hi, My name is Sohel</h2>
        <div className="prompt">
        <p>Front-End Developer with a Passion for Creating Engaging User Experiences </p>
        <a href="https://www.instagram.com" target='_blank'><InstagramIcon/></a>
        <a href="mailto:developer.sohel.p@gmail.com"><EmailIcon/></a>
        <a href="https://github.com/Sohelspathan" target="_blank"><GithubIcon/></a>
        </div>
      </div>
      <div className="skills">
        <h2>Skills:</h2>
        <ol className='list'>
          <li className="item">
            <h4>Front-End</h4>
            <span> React js, HTML, CSS, Vanilla JS, NPM, Bootstrap, Material UI,   </span>
          </li>
          </ol>
        <ol className='list'>
          <li className="item">
            <h4>Back-End</h4>
            <span> Node js, Firebase, Appwrite,  </span>
          </li>
          </ol>
        <ol className='list'>
          <li className="item">
            <h4>Languages</h4>
            <span> HTML, CSS, Java Script, Python, Reactjs, Node js, Mongodb, Express js, Embedded js.  </span>
          </li>
        </ol>
      </div>
    </div>

    </>
  )
}

export default Home