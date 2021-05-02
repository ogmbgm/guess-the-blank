import React from 'react';
import './Header.css';

const Header = ({title = '____'}) => (
    <div id="header-background">
        <h1 id='title'>Guess the {title}!</h1>
    </div>
)

export default Header;
