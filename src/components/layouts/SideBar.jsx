import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../Assets/quran-logo.svg'
import expand from '../../Assets/expand_more.svg'

function SideBar() {
  return (
    <>
      <div className='sidebar-wrapper'>
        <div className='logo'>
          <div className='mt-1'>
            <img src={logo} alt="" width="50px" height="50px" />
          </div>
          <div className="d-flex align-items-center justify-content-center login-title">
            <h4 className="center mb-3 login-title-sidebar"
              style={{ color: '#ffffff' }}>Quran</h4>
            <p className='login-subtitle-sidebar' style={{ color: '#ffffff' }}>drfazl</p>
          </div>
        </div>
        <div className='list-sidebar-wrapper'>
          <div className='list-sidebar'>
            <NavLink className='list-items sidebar-footer-lists' to='preface'>Preface</NavLink>
            <NavLink className='list-items sidebar-footer-lists' to='chapters'>Chapters</NavLink>
            <NavLink className='list-items sidebar-footer-lists' to='translation'>About Translation</NavLink>
            <NavLink className='list-items sidebar-footer-lists' to='glossary'>Glossary</NavLink>
            <NavLink className='list-items sidebar-footer-lists' to='author'>About the Author</NavLink>
            <NavLink className='list-items sidebar-footer-lists' to='unique'>What's unique</NavLink>
          </div>
          <div className='sidebar-footer'>
            <NavLink to='language' className="sidebar-footer-lists list-items">English
              <img src={expand} alt="" />
            </NavLink>
            <NavLink to='theme' className="sidebar-footer-lists list-items">LightMode
              <img src={expand} alt="" />
            </NavLink>
            <NavLink to='settings' className="sidebar-footer-lists list-items">Settings</NavLink>
            <NavLink to='userprofile' className="sidebar-footer-lists list-items">Jithendran
              <img src={expand} alt="" />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar