import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import NavBar from '../NavBar/NavBar';

function Home () {
    return (
        <>
        <NavBar/>
            <div className="all-containers">
                <div>
                    <img src="./images/GOT_1.jpeg " alt="episodes" />
                </div>
                <div className="description">
                    <Link className="link-single" to='/episodes'>All Episodes</Link>
                        <p>
                        Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Viavamus 
                        pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam 
                        dictum arcu ut dignissim varius.
                        </p>
                </div>
                <div>
                    <img src="./images/GOT_2.jpeg " alt="random-beer" />
                </div>
                <div className="description">
                    <Link className="link-single" to='/random-beer'>Specific Episode</Link>
                        <p>
                        Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Viavamus 
                        pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam 
                        dictum arcu ut dignissim varius.
                        </p>
                </div>
            </div>
        </>
    )
}


export default Home