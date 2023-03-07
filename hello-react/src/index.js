import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import image from './img.JPG'
import SkillsTag from './components/SkillsTag/SkillsTag';
import Profile from './components/Profile/Profile';
import SocialIcon from './components/SocailIcon/SocialIcon';
import socialIcons from './SocialIconInfo';


// import Img from './components/SocailIcon/Img'

const root = ReactDOM.createRoot(document.getElementById('root'));
const skills = ["Java", "HTML", "Docker"]
root.render(
  <>
    <Profile image={image} name='MD Mehrab Alam' position='Learning Full Stack webdevelopment' companyName='Torqbit' country='India' />
    <div className='skill-container'>{skills.map((s, i) => (<SkillsTag key={i} skill={s} />))}</div>
    <div className='icons-container'>
      {socialIcons.map((icon, i) => (<SocialIcon key={i} name={icon.name} iconsImg={icon.src} />))}
    </div>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

