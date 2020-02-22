import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
            <Link style={linkStyle} to='/'>Home</Link> | <Link style={linkStyle} to='/about'>About</Link>
        </header>
    )

}

const headerStyle = {
    background: '#144145',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none' 
}

export default Header;

// Functional component that doesn't doe anything and is going to stay there even when everything else is delted so
// It should be a separate component because it's just for display and it is for this page aloneto remain there even
// though other stuff is going on.
// http request 01:26:00. You could use fetch api but we use axios here.
// fetch the todos 
