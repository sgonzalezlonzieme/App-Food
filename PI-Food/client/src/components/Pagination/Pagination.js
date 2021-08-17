import React from 'react';
import './Pagination.css';

export function Pagination({postsPerPage, totalPosts, paginate}){
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage);i++){
        pageNumbers.push(i);
    }

    return (<div>
        <nav>
        <ul className="Pagination">
            {pageNumbers.map(number => (
                   <button onClick={() => paginate(number)} className="Pagination_pageLink">
                       {number}
                   </button>
            ))}
        </ul>
        </nav>
    </div>)
}