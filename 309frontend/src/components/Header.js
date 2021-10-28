import React from 'react';
import '../css/Header.css';

/**
 * Standard website header component.
 */
function Header(props) {
    return (
        <div className="header">
            <h1 className="logo">uoft locals</h1>
            <div className="links">
                {props.children}
            </div>
        </div>
    );
}

export default Header;