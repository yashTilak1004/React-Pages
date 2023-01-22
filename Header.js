import React from 'react';
import { Link } from 'react-router-dom';
function Header()
{
    return (<header className=" border-bottom header1">
            <div className="py-4 container-fluid ">
            <div className="row">
                <div className="col-3">
                <a href="/" className="   text-light text-decoration-none">
                    <h4>Research Grant Protal</h4>
                </a>
                </div>
                <div className="col-3 text-end offset-6">
                <button type="button" className="btn btn-light text-dark mx-2">Login</button>
                <button type="button" className="btn btn-danger text-dark ">Register</button>
                </div>
            </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-bg-light">
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item px-md-5">
                <Link to='/User' style={{color:"#FFF"}}>User Page</Link>
            </li>
            <li className="nav-item px-md-5">
                <Link to='/Stats' style={{color:"#FFF"}}>Stats</Link>
            </li>
            <li className="nav-item px-md-5">
                <Link to='/List' style={{color:"#FFF"}}>List</Link>
            </li>
            <li className="nav-item px-md-5">
                <Link to='/about' style={{color:"#FFF"}}>About</Link>
            </li>
            </ul>
            
        </div>
        </nav>
        </header>);
}
export default Header;