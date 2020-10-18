import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src="https://is5-ssl.mzstatic.com/image/thumb/Purple82/v4/86/1f/1f/861f1faf-2f64-f5a0-5c76-54c1fc9392da/icon.png/1200x630bb.png" />
            <div className={classes.loginBlock}>
              { props.isAuth ? <div>{props.login}<div><button onClick={props.logout}>Logout</button></div></div> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
      </header>
    )
}

export default Header;