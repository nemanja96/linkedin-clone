import React from 'react'
import { useDispatch } from 'react-redux';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { logout } from './features/userSlice';
import { auth } from './firebase';
import { useSelector } from 'react-redux';
import{ selectUser} from './features/userSlice';

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  }

  return (
    <div className='header'>
        <div className='header__left'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" />

            <div className='header__search'>
                <SearchIcon />
                <input type="text" placeholder='Search'/>
            </div>
        </div>
        <div className='header__right'>
            <HeaderOption Icon={HomeIcon} title="Home" className="header__item" />
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network" className="header__item" />
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs" className="header__item" />
            <HeaderOption Icon={ChatIcon} title="Messaging" className="header__item" />
            <HeaderOption Icon={NotificationsIcon} title="Notifications" className="header__item" />
            <HeaderOption avatar={true} title="Sign out" onClick={logoutOfApp} className="header__item" />
        </div>
    </div>
  )
}

export default Header