import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const styles = {
            backgroundColor: 'aqua',
            padding: 2
            
         }
        return (
            <div  style={styles}>
                <header>
                    <nav >
                        <div className="container">
                            <Link to="/" class="w3-bar-item w3-button w3-mobile"><button className="button">Home</button></Link>
                            <Link to="/add-plans" className="navbar-brand"><button className="button">Add Plan</button></Link>
                            <Link to="/search-plans" className="navbar-brand"><button className="button">Search Plan</button></Link>
                            <Link to="/prop-items" className="navbar-brand"><button className="button">Properties</button></Link>
                            <Link to="/add-properties" className="navbar-brand"><button className="button">Add Properties</button></Link>
                            <Link to="/search-properties" className="navbar-brand"><button className="button">Search Properties</button></Link>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;