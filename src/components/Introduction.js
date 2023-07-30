import React from 'react'
import MyImage from '../images/MyImage-removebg.png'
import './introduction.css'
import { TypeAnimation } from 'react-type-animation';
// import myResume from "../Resume/Snej's_Resume.pdf"
// import { saveAs } from 'file-saver';
import { saveAs } from 'file-saver';
import myResume from "../Resume/Snej's_Resume.pdf";

export default function Introduction() {
  function downloadResume() {
    saveAs(myResume, "Snej's_Resume.pdf");
  }

  return (
    <>
      <div className="intro-main">
        {/* <div className="myintro">
          <div className="myimage">
            <img src={MyImage} />
          </div>
          <div className="introduction">
            <p className="myname">Snej Hirpara</p>
            <p className="intro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque omnis praesentium unde totam, sed in asperiores et alias consequuntur suscipit ab architecto minus? Porro autem incidunt dolor. Nobis magni consequatur rem ducimus, iusto dolor, quam est, accusamus expedita nam quibusdam voluptates? Commodi minus, libero voluptatibus eius ea sapiente, dolorem animi ratione inventore recusandae hic! Maiores consequatur, exercitationem, temporibus repellat soluta ex qui deleniti ea labore, laborum alias atque error velit officiis? Repellat reprehenderit inventore delectus. Unde velit recusandae voluptas debitis.</p>
          </div>
        </div>
        <div className="my-resume">
          <button className="resume">My Resume</button>
        </div> */}
        <div className="intro-content">
          <h3>Hello It's Me</h3>
          <h1>Snej Hirpara</h1>
          <h3>And I'm a <span className="multiple-text">
            {/* <Typed strings={["Full-Stack Developer", "Android Designer", "Web Developer",]} typeSpeed={100} backSpeed={100} backDelay={1000} loop/> */}
            <TypeAnimation sequence={['Full-Stack Developer', 1000, 'Android Designer', 1000, 'Web Developer', 1000]} wrapper="span" speed={50} //style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity} />
          </span>
          </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eveniet debitis autem repellendus cumque blanditiis amet facilis, nesciunt voluptatibus tenetur.</p>
          <div className="social-media">
            {/* <a href="#" className="facebook" style={{"--i":"7"}}><i className='bx bxl-facebook'></i></a> */}
            <a href="https://twitter.com/SnejHirpara" target="_blank" className="twitter" style={{ "--i": "8" }}><i className='bx bxl-twitter' ></i></a>
            <a href="#" className="instagram" style={{ "--i": "9" }}><i className='bx bxl-instagram-alt' ></i></a>
            <a href="https://www.linkedin.com/in/snej-hirpara-1303141b9/" target="_blank" className="linkedin" style={{ "--i": "10" }}><i className='bx bxl-linkedin' ></i></a>
          </div>
          <button className="btn-download-resume" onClick={downloadResume}>Download Resume</button>
        </div>
        <div className="home-img">
          <img className="myimage" src={MyImage} />
        </div>
      </div>
    </>
  )
}
