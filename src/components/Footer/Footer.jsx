import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/github.png";

function Footer() { 
    return (
        <footer className="footer">

            <div className='container'>
                <a href='https://github.com/AdrianTerciado' className="enlace">
                    <img className="logo" src={logo} alt="" />
                    <p className="text">GitHub</p>
                </a>
            </div>
            
            <div className='container'>
                <a href="" className="enlace">
                    <p className="text">About</p>
                </a>
                
            </div>

            <div className='container'>
                <a href="" className="enlace">
                    <p className="text">Contact</p>
                </a>
                
            </div>
        </footer>
    )
}


<div className="container-logo-name">

</div>


export default Footer