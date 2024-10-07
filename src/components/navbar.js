import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <>
        
        <div className='container-fluid header'>
                <div className='header-search-bar'>
                    <i class="fa-brands fa-facebook"></i>
                    <div className='header-bar'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder='Search Facebook' />
                    </div>
                </div>
                <div className='header-navigation'>
                        <div className='navigation-tab'><i class="fa-solid fa-house"></i></div>
                        <div className='navigation-tab'><i class="fa-solid fa-user-group"></i></div>
                        <div className='navigation-tab'><i class="fa-solid fa-tv"></i></div>
                        <div className='navigation-tab'><i class="fa-solid fa-store"></i></div>
                        <div className='navigation-tab'><i class="fa-solid fa-users-viewfinder"></i></div>
                </div>
                <div className='header-info'>
                    <div className='info-profile d-flex'>
                        <div className='profile-pic'></div> <span>Ahmad</span>
                    </div>
                    <div className='profile-tabs'><i class="fa-solid fa-bars"></i></div>
                    <div className='profile-tabs'><i class="fa-brands fa-facebook-messenger"></i></div>
                    <div className='profile-tabs'><i class="fa-solid fa-bell"></i></div>
                    <div className='profile-tabs'><i class="fa-solid fa-caret-down"></i></div>
                </div>
        </div>

    </>
  )
}

    export default Navbar
