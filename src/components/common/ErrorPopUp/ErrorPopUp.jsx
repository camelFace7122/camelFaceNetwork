import React from 'react';
import classes from './ErrorPopUp.module.css'
import cn from 'classnames';

export const ErrorPopUp = ({globalError, onErrorPopUpClose}) => {

    return (
        <div className={cn(classes.errorPopUp, {[classes.isHasError]: globalError})}>
            <p>Sorry, it seems we have error</p>
            <h4>{globalError}</h4>
            <button className={classes.closeBtn} onClick={() => onErrorPopUpClose(null)} >&times;</button>
        </div>
    )
}