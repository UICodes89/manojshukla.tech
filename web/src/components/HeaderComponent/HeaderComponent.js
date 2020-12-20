import React, { Component } from "react";
// import logo from "../../images/logo.svg";
import portfolio from "../../images/manoj.jpg";
import {Link} from 'react-router-dom';
import  './HeaderComponent.css'

class HeaderComponent extends Component{
    render(){
        return(
            <header className="main_menu home_menu menu_fixed header" >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="introduction">
                                <div className="my_image">
                                    <img src={portfolio} alt="" className="portfolio"/>
                                </div>
                                <div>
                                <p>FULL STACK DATA SCIENCE <br /> DEVELOPER</p></div>
                                {/* <a className="navbar-brand" href="index.html"> <img src={logo} alt="logo" className="logo"/> </a> */}
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="menu_icon"><i className="ti-menu"></i></span>
                                    </button>
                            </div>
                        <nav className="navbar navbar-expand-lg navbar-light">
                                <div className="collapse navbar-collapse main-menu-item " id="navbarSupportedContent">
                                    <ul className="navbar-nav mx-auto">                                        
                                        {/* <li className="nav-item dropdown">
                                            <Link to="/blog" className="nav-link " id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Blog
                                            </Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                        <Link to="/portfolio" className="nav-link" href="blog.html" id="navbarDropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            portfolio
                                            </Link> 
                                            
                                        </li>*/}
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                                
                            </nav>
                            <div className="social_media">
                                <div className="social_icon">
                                    <a href="https://www.facebook.com/mshukla08/"><i className="fa fa-facebook-square"></i></a>
                                    <a href="https://www.instagram.com/manoj_k_shukla/"><i className="fa fa-instagram"></i></a>
                                    <a href="https://www.linkedin.com/in/manoj-shukla-77505782/"><i className="fa fa-linkedin"></i></a>
                                    <a href="https://github.com/UICodes89"><i className="fa fa-git"></i></a>
                                    <a href="/portfolio.html"><i className="fa fa-file"></i></a>
                                </div>
                            </div>
                        </div>                    
                    </div>
                </div>
            </header>
        )
    }
}

export{
    HeaderComponent
}