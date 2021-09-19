import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton'

function Header() {
    return (
        <div className='header'>
            <IconButton>
            <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>
            <img src="https://cdn.worldvectorlogo.com/logos/tinder-icon.svg" className="header__logo" alt="img"/>
         <IconButton>
         <ForumIcon fontSize="large" className="header__icon" />
         </IconButton>
        </div>

    )
}

export default Header
