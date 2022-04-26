import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material';
import avatar from './images/avatar.png';
import backgroundImage from './images/background.jpg';

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )

  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src={backgroundImage} alt="" />
            <Avatar src={avatar} className="sidebar__avatar" sx={{ width: 70, height: 70}}/>
            <h2>Nemanja Radivojevic</h2>
            <h4>Front End Developer</h4>
        </div>

        <div className='sidebar__stats'>
            <div className="sidebar__stat">
                <p>Page notifications</p>
                <p className="sidebar__statNumber">542</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statNumber">441</p>
            </div>
        </div>

        <div className='sidebar__bottom'>
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('softwareengineering')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>
    </div>
  )
}

export default Sidebar