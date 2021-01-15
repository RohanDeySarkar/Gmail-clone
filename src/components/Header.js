import React from 'react';
import './Header.css';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { Avatar, IconButton } from '@material-ui/core';


import {selectUser, logout} from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../firebase';

function Header() {
    
    const dispatch = useDispatch();

    const user = useSelector(selectUser);

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout())
        });
    };

    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img 
                    src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" 
                    alt="" 
                />
            </div>
            
            <div className="header__middle">
                <SearchIcon />
                <input 
                    placeholder="Search mail" 
                    type="text"
                />
                <ArrowDropDownIcon className="header__inputCaret" />
            </div>

            <div className="header__right">
                <IconButton>
                    <HelpOutlineIcon />
                </IconButton>
                <IconButton>
                    <SettingsIcon />
                </IconButton>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <Avatar
                style={{cursor: "pointer"}} 
                    src={user?.photo}
                    onClick={signOut}
                />
            </div>  
        </div>
    )
}

export default Header
