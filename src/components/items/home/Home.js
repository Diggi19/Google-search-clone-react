import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import MicIcon from '@material-ui/icons/Mic';
import './home.css'
import { Link, useHistory } from 'react-router-dom';
import Search from '../search/Search';
const Home = () => {
    
    
    
    return (
        <form className="home__container">
            <div className="home__navbar">
                <div className="nav__btnleft">
                    <h3>About</h3>
                    <h3>Store</h3>
                </div>
                <div className="nav__btnright">
                    <h3>Gmail</h3>
                    <h3>Images</h3>
                    <AppsIcon className="store__icon"/>
                    <Avatar className="avatar" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />


                </div>
            </div>
            <div className="home__main">
                <Search/>
            </div>
        </form>
    )
}

export default Home
