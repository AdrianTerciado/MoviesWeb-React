import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/icono_movies.png";

function Header() {
    return (
        <header>
            <div className="container-logo-name">
                <Link to='/' className="link-logo-name">
                    <img className="logo" src={logo} alt="" />
                    <h2 className="name">movies-webApp</h2>
                </Link>
            </div>

            <h2 className="login"><Link to='/login'>Favorites</Link></h2>
       </header>
    )
}

export default Header