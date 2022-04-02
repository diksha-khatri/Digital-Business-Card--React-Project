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
                <p><i className="fa-brands fa-linkedin color"></i></p>
                <a href="https://www.linkedin.com/in/dikshakhatri/" target="_blank">LinkedIn</a>
              </div>
            </div>
            <div className='main--content'>
              <div >
              <h2>About</h2>
              <p>An Adaptive Resilient Developer(Adaptive to new technology and Resilient to Adapt).I am a Frontend Developer with the ability to write clean and efficient code , and strong ability to execute and implement standard software architecture patterns.</p>
              </div>
              <div>
              <h2>Intrests</h2>
              <p>Tech Lover , Great White Lover , Coffee Lover</p>
              </div>
            </div>
       </main>
    )
  }