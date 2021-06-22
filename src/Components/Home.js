import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { APIHoc } from '../Redux/Hoc/Apiconected';
import { PostHoc } from './PostData';

class Home extends Component {
    render() {
        return (
            <Router>
                <div id="container">
                    <div id="menu-bar">
                        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                            <Link className="navbar-brand" to="/">My React APP</Link>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Post_Update">PostUpdate</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Post_Display">PostDisplay</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div id="content">
                        <Route path="/Post_Update" exact component={APIHoc} ></Route>
                        <Route path="/Post_Display" component={PostHoc} ></Route>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Home
