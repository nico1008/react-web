import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import'./Bar.css';

function Bar() {
  return (
    <div>
        <nav className="navbar">
            <div className="navbar-cont">
                <Link to="/" className="navbar-logo">
                    NICO IV
                </Link>
            </div>   
        </nav>
    </div>
  )
}

export default Bar