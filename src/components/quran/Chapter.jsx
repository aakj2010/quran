import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


function Chapter() {
    return (
        <>
            <div className='chapter-wrapper'>
                <div className='ch-sub-header'>
                    <NavLink to='' className='header-items'>Chapters</NavLink>
                    <NavLink to='keywords' className='header-items'>Keywords</NavLink>
                    <NavLink to='bookmarks' className='header-items'>Bookmarks</NavLink>
                    <NavLink to='notes' className='header-items'>Notes</NavLink>
                </div>
                <Outlet />
            </div>
        </>
    )
}

export default Chapter