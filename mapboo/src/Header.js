import React from 'react';

function Header(){

    return (
        <header>
            <nav className="navigation">
                <div className="logo">Aire</div>
                <ul className="navlinks">
                    <li>
                        <span class="material-symbols-outlined">person</span>Login
                    </li>
                    <li>
                        <span class="material-symbols-outlined">home</span>Home
                    </li>
                    <li>
                        <span class="material-symbols-outlined">map</span>Map
                    </li>
                    <li>
                    <span class="material-symbols-outlined">comment</span>Comment
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;