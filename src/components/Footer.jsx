import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <footer>
        <p className='logo'>AIELLO</p>
        <div className='.social-icons-anchor'>
            <a href="https://www.linkedin.com/in/sagar-chawla-1085231bb/" target='blank'><i className="fa-brands fa-linkedin-in"></i></a>
            <a href='https://github.com/sagar803'><i className="fa-brands fa-github"></i></a>
            <a href="https://twitter.com/s_a__g___a____r"><i className="fa-brands fa-twitter"></i></a>
            <a href="https://www.instagram.com/with_sagar/" target='blank'><i className="fa-brands fa-instagram"></i></a>
        </div>
        <ul className='navigation'>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Report Bug</a></li>
        </ul>
        <hr />
        <p className='.my-name'>Made by &copy; Sagar Chawla</p>
    </footer>
  )
}
