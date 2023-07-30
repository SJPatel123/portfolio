import React from 'react'
import './projects.css'

export default function Projects(props) {
  const desc = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, ipsum magnam? Ipsam sapiente reiciendis placeat, quam ducimus praesentium alkdjlaksdjlakjdlAJLKJ Lkajs lKAJSLKajs KAAJLKAJDAKLSJD LKASDJ laksdjlaksdjkalsdjlkaaaksdjlaksdj aklsjd laksjdlasjjdoajdlaksjd lkasjdlkajsdlaksjdlaksjd laksjdlaksjd lakjsdasjdal ksjdlaj alksdjlkajd";
  return (
    <>
      <div className="project-card">
        <div className="project-title">
          <p>{props.title}</p>
        </div>
        <div className="project-description">
          {desc.length <= 139 ? desc : desc.substring(0, 139) + "..."}<a className="readmore" href="#">Read More</a>
        </div>
      </div>
    </>
  )
}
