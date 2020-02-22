import React from 'react';

function About() {
    return (
        <div>
            <h1>About</h1>
            <p>This is the TodoList app v1.0.0. It is part of a React crash course</p>
        </div>
    )
}

export default About;

// How do we decide when to use React router? We don't want to display this about page on the main page. So this is where we use React Router.