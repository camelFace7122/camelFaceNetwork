import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/flame.svg';
import defaultUserPhoto from '../../assets/images/user.png';

const Header = (props) => {
    return (
        <header className={classes.header}>
          <div className='wrapper'>
            <div className={classes.headerContainer}>
              <div className={classes.logotype}>
                <img src={logo} />
                <span className={classes.logoName}>Bonfire</span>
                <span className={classes.logoSlogan}>so turn the lights out</span>
              </div>
              <div className={classes.loginBlock}>
                { props.isAuth ? 
                <div className={classes.authorized}>
                  <div className={classes.authorizedTextBlock}>
                    <span className={classes.userLogin}>{props.login}</span>
                    <div>
                      <button onClick={props.logout}>Logout</button>
                    </div>
                  </div>
                  <div className={classes.image}>
                    <img src={props.userPhoto || defaultUserPhoto } alt="user photo"/>
                  </div>
                </div> : 
                <NavLink to={'/login'}>Login</NavLink>}
              </div>
            </div>
          </div>
      </header>
    )
}

export default Header;