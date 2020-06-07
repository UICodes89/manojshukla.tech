import React, { Component } from "react";
import logo from "../../images/logo.svg";

class HeaderComponent extends Component{
    render(){
        return(
            <header className="main_menu home_menu menu_fixed">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg navbar-light">
                                <a className="navbar-brand" href="index.html"> <img src={logo} alt="logo" className="logo"/> </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="menu_icon"><i className="ti-menu"></i></span>
                                </button>
                                <div className="collapse navbar-collapse main-menu-item " id="navbarSupportedContent">
                                    <ul className="navbar-nav float-right">                                        
                                        <li className="nav-item dropdown">
                                            <a className="nav-link " href="blog.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Blog
                                            </a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link" href="blog.html" id="navbarDropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            portfolio
                                            </a>
                                            
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="contact.html">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="social_icon">
                                    <a href="https://www.facebook.com/mshukla08/"><i className="fa fa-facebook-square"></i></a>
                                    <a href="https://www.instagram.com/manoj_k_shukla/"><i className="fa fa-instagram"></i></a>
                                    <a href="https://www.linkedin.com/in/manoj-shukla-77505782/"><i className="fa fa-linkedin"></i></a>
                                    <a href="https://s3-eu-west-1.amazonaws.com/www.manojshukla.tech/ManojShukla_Fullstack_dublin.docx"><i className="fa fa-file"></i></a>
                                </div>
                            </nav>
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