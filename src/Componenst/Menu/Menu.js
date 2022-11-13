import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BsInstagram } from "react-icons/bs"
import {AiOutlineClose, AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { MyContext } from '../Context/Context'
import "./menu.style.scss"

function Menu() {
    const {blog:{showMenu},dispatch} =useContext(MyContext)

    function closeMenu(){
      dispatch({type:"showMenu"})
      document.body.style.overflow="inherit"
      
    }

    useEffect(()=>{
        dispatch({type:"deletDetailBlog"})
      showMenu && (document.body.style.overflow="hidden")
    },[])

  return (
    <div className="main-menu">
          <div className="container">
            <AiOutlineClose onClick={closeMenu} className="menu-close" />
            <img src="img/svg3.png" className="menu-logo" alt="logo" />
            <div className="menu-container">
              <ul>
                <Link to={"/"} onClick={closeMenu}><li>Home</li></Link>
                <Link to={"/create"} onClick={closeMenu}><li>Create blog</li></Link>
                <li>Небольшой проект, в котором можете поделиться вашими интересами или мнениями</li>
              </ul>
              <div className="icons">
                <a href="https://github.com/nersesyansyuzi" target="blank" ><AiFillGithub /></a>
                <a href="https://www.linkedin.com/in/syuzanna-nersesyan-a08293249/" target="blank"><AiFillLinkedin /></a>
                <a href="https://www.instagram.com/nersesyan03/" target="blank"><BsInstagram /></a>
              </div>

            </div>
          </div>
        </div>
  )
}

export default Menu