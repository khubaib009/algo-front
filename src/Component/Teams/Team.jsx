import React from 'react';
import './Team.css';
import Footer from '../home/Footer';
import Navbar from '../home/Navbar';
import kunal from '../home/Images/KunalDhawan.jpeg'

import Abishek from '../home/Images/abishake.jpeg'
import viney from '../home/Images/viney1.jpeg'
import satvik from '../home/Images/Satvik.jpg'
import keshav from '../home/Images/Keshav.jpg'
import Aaditya from '../home/Images/AdityaAnand.jpeg'
import shashank from '../home/Images/Shashank.jpeg'
import Badri from '../home/Images/Badri.jpeg'
import jean from '../home/Images/Jean-Luc.jpeg'
import Vineeth from '../home/Images/Vineet.jpg'
import Sahil from '../home/Images/Sahil.jpeg'
import Muzammin from '../home/Images/MUAZZIM.JPG'
import Damien from '../home/Images/Damien.jpeg'
import Evren from '../home/Images/Evren.jpeg'
import Aboutus from '../home/Aboutus'
const founder = {
  name: 'Kunal Dhawan',
  role: 'CEO & Founder',
  img: kunal,
  social: {
    linkedin: '#',
    twitter: '#',
    instagram: '#'
  }
};

const teamMembers = [
 
  // Duplicate for demonstration; ideally, you'd map over different data

  {
    name: 'Abhishek Singh',
    role: 'Crypto Lead',
    img: Abishek,
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    name: 'Viney Dhankhar',
    role: 'Index Derivatives Lead',
    img: viney,
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    name: 'Satvik Gupta',
    role: 'Commodities Lead',
    img: satvik,
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  },
 
  
];

const legals = [
 
  // Duplicate for demonstration; ideally, you'd map over different data
  {
    name: 'Shashank Roheria',
    role: 'Legal Principal',
    img: shashank,
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  },
 
  {
    name: 'Jean-Luc Choufani',
    role: 'Director - Americas',
    img: jean,
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  },
 
];


const Advisory= [
 
  // Duplicate for demonstration; ideally, you'd map over different data
  {
    name: 'Damien Iggiotti',
    img: Damien,
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    name: 'Evren Cubukgil',
    img: Evren,
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  }
];

const Team = () => {
  return (
    <div>
      <Navbar/>
      <Aboutus />
    <div className="team-container">
        <div className="ceo-header">
        <h2 className='textcolo2' style={{ fontSize: '46px', fontWeight: 'bolder', color: '#333' }}>Meet Our <span className='boldme'>Expert Team</span></h2>
      </div>
      <div className="ceo-header2">
      
        <h2 className='textcolo1'  style={{ marginTop:"20px", fontSize: '36px', color: 'white' }}>Meet Our Founder & Quantitative Team</h2>
     </div>
      
       {/* Render Founder First */}
       <div className="ceo-items founder">
        <div className="ceo-member">
          <img src={founder.img} alt={founder.name} className='images'/>
        </div>
        <div className="member-info">
          <h3>{founder.name}</h3>
          <span>{founder.role}</span>
          <div className="social-icon">
            <a href={founder.social.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href={founder.social.twitter} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href={founder.social.instagram} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
     
     {/* Team */}
      {/* <div className="team-header">
        <h2 className='textcolo'  style={{ fontSize: '36px', marginTop:"8px", fontWeight: 'bold', color: 'white' }}>Quantitative Team</h2>
      </div> */}
      
      {teamMembers.map((member, index) => (
        <div className="team-items" key={index}>
          <div className="team-member">
            <img src={member.img} alt={member.name} />
          </div>
          <div className="member-info">
            <h3>{member.name}</h3>
            <span>{member.role}</span>
            <div className="social-icon">
              <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

      ))}
{/* Legal & Business Development */}
<div className="team-header">
        <h2 className='textcolo'  style={{ fontSize: '36px', marginTop:"8px", fontWeight: 'bold', color: 'white' }}>Legal, Advisory Board & Business Development</h2>
      </div>
      
      {legals.map((member, index) => (
        <div className="team-items" key={index}>
          <div className="team-member">
            <img src={member.img} alt={member.name} />
          </div>
          <div className="member-info">
            <h3>{member.name}</h3>
            <span>{member.role}</span>
            <div className="social-icon">
              <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>  
      ))}


{/* Advisory Board  */}
{/* <div className="team-header">
        <h2 className='textcolo'  style={{ fontSize: '36px', marginTop:"8px", fontWeight: 'bold', color: 'white' }}>Advisory Board</h2>
      </div> */}
      
      {Advisory.map((member, index) => (
        <div className="team-items" key={index}>
          <div className="team-member">
            <img src={member.img} alt={member.name} />
          </div>
          <div className="member-info">
            <h3>{member.name}</h3>
            <span>{member.role}</span>
            <div className="social-icon">
              <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

      ))}

</div>
<Footer/>
    </div>
  );
};

export default Team;
