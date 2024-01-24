import React from 'react'
import '../styles/footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <a href="http://www.facebook.com" target='_blank' ><FacebookIcon /></a>
            <a href="http://www.Instagram.com" target='_blank'><InstagramIcon /></a>
            <a href="http://www.Twitter.com" target='_blank'><TwitterIcon /></a>
            <a href="https://www.linkedin.com/in/sohelpathan1/" target='_blank'><LinkedInIcon /></a>
        </div>
        <p>&copy; 2024-{new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer