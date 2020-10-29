import React, { useState } from 'react';
import classes from './Paginator.module.css';
import cn from 'classnames';

let Paginator = ({portionSize = 10, currentPage, totalUsersCount, pageSize, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    
    return (
        <div className={classes.numbers}>
            <button disabled={portionNumber === 1} onClick={() => {
                if (portionNumber > 1) {
                    setPortionNumber(portionNumber - 1);
                }
            }}>Prev</button>

            {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(i => <span key={i} className={cn(classes.pageNumber, {[classes.selectedPage]: currentPage === i})}
            onClick={(e) => onPageChanged(i)}>{i}</span>)}

            <button disabled={portionNumber === portionCount} onClick={() => {
                if (portionNumber < portionCount) {
                    setPortionNumber(portionNumber + 1);
                }
            }}>Next</button>
        </div>
    )
}

export default Paginator;