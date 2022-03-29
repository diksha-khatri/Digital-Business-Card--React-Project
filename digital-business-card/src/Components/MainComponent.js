import React from "react"

export default function MainComponent(){
    return(
       <main>
            <div className='main--title'>
              <h1>Diksha Khatri</h1>
              <h3>Frontend Developer</h3>
            </div>
            <div className='flex'>
              <div className='flex'>
                <p><i className="fa-solid fa-envelope color"></i></p>
                <a>Email</a>
              </div>
              <div className='flex'>
                <p><i className="fa-brands fa-linkedin color"></i></p>
                <a>LinkedIn</a>
              </div>
            </div>
            <div className='main--content'>
              <div >
              <h2>About</h2>
              <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
              </div>
              <div>
              <h2>Intrests</h2>
              <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
              </div>
            </div>
       </main>
    )
  }