import React from 'react';

function NavBar({totalCount}){
    return (
        <div className="navbar">
            <span> 할일 목록 리스트 </span>
            <span className="navbar-count">{totalCount}</span>
        </div>
    )
}

export default NavBar;