import React from 'react'
import SchoolIcon from '@mui/icons-material/School';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import WorkIcon from '@mui/icons-material/Work';

import 'react-vertical-timeline-component/style.min.css';

function Experience() {
  return (
    <>
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement className='vertical-timeline-element--education'
         date='2014-2015'
         iconStyle={{background:'#3e497a', color:'#fff'}} 
         icon={<SchoolIcon/>}>
          <h3 className='vertical-timeline-element-title'> Kendriya Vidyalaya INS Hamla, Malad, Mumbai, India
          </h3>
          <p>Senior Secondary School <br/>
          CGPA:8.0</p>
         </VerticalTimelineElement>

         <VerticalTimelineElement className='vertical-timeline-element--education'
         date='2016-2017'
         iconStyle={{background:'#3e497a', color:'#fff'}} 
         icon={<SchoolIcon/>}>
          <h3 className='vertical-timeline-element-title'> Kendriya Vidyalaya INS Hamla, Malad, Mumbai, India
          </h3>
          <p>Higher Secondary School <br/>
          </p>
         </VerticalTimelineElement>

         <VerticalTimelineElement className='vertical-timeline-elememt--education'
         date='2017-2021'
         iconStyle={{background:'#3e497a',color:'white'}}
         icon={<SchoolIcon/>} >
          <h3 className='vertical-timeline-element-title' > TKR College OF Engineering AND Technology, Hyderabad, India
         </h3>
         <p>Bachelore of Technology in Computer Science and Engineering <br/>Result: Passed with First Class</p>
          
         </VerticalTimelineElement>

         <VerticalTimelineElement className='vertical-timeline-elememt--work'
         date='2022-2023'
         iconStyle={{background:'#EFEF39',color:'#fff'}}
         icon={<WorkIcon/>} >
          <h3 className='vertical-timeline-element-title' > Wipro Technologies Limited
         </h3>
         <h4 className='vertical-timeline-element-subtitle'>Mumbai</h4>
         <p>Worked as a Cyber Security Analyst</p>
          
         </VerticalTimelineElement>

        </VerticalTimeline></div>
    </>
  )
}

export default Experience