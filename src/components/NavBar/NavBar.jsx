import React from 'react';
import classes from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
import Friend from './Friend/Friend';
import cn from 'classnames'

const NavBar = (props) => {

  let friendsElements = props.sidebar.friends.map(data => {
    return <Friend key={data.id} state={data} />
  })

  return (
      <div className={classes.navBar}>
          <nav className={classes.nav}>
            <div className={classes.item}>
              <NavLink to="/profile" activeClassName={classes.active}>
                Profile
              </NavLink>
            </div>
            <div className={cn(classes.item, classes.active)}>
              <NavLink to="/dialogs" activeClassName={classes.active}>
                Messages
              </NavLink>

            </div>
            <div className={classes.item}>
              <NavLink to="/users" activeClassName={classes.active}>
                Users
              </NavLink>
            </div>
            <div className={classes.item}>
              <NavLink to="/news" activeClassName={classes.active}>
                News
              </NavLink>
            </div>
            <div className={classes.item}>
              <a>
                Music
              </a>
            </div>
            <div className={classes.item}>
              <a>
                Settings
              </a>
            </div>
          </nav>

          <aside>
            <h3>Friends</h3>
            <div className={classes.friends}>
              {friendsElements}
            </div>
          </aside>
      </div>
  )
}

export default NavBar;