import React, {Component} from 'react';

class NavBar extends Component{
    render(){
        return (
            <div className="navbar">
                <i className="navbar-logo fas fa-leaf"></i>
                <span> 할일 목록 리스트 </span>
                <span className="navbar-count">{this.props.totalCount}</span>
            </div>
        )
    }
}

export default NavBar;