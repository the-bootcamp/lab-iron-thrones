import React from 'react';
import { Link }  from 'react-router-dom';

function NavBar () {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <Link className="nav-item nav-link" to="/episodes">All Episodes</Link>
                        <Link className="nav-item nav-link" to="/specific-episode">Specific Episode</Link>
                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default NavBar