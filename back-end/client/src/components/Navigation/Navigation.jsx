import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import "./navigation.css"
import "./navi_responsive.css"

export default class Navigation extends React.Component {
    render() {
        return (
            <div className='super_container'>
                <header className='header'>
                    <div className='top_bar'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col'>
                                    <div className='top_bar_content d-flex flex-row align-items-center justify-content-start'>
                                        <div className="top_bar_phone"><span className="top_bar_title">phone:</span>+84 123456789</div>
                                        <div className="top_bar_right ml-auto ">
                                            <div className='top_bar_social align-items-center'>
                                                <span className='top_bar_title social_title'>Follow us</span>
                                                <ul>
                                                    <li><a href="https://www.facebook.com/RMITUniversityVietnam" target="_blank"><i className="fab fa-facebook-square" aria-hidden="true"></i></a></li>
                                                    <li><a href="https://www.instagram.com/rmituniversityvietnam/" target="_blank"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                                                    <li><a href="https://www.youtube.com/c/RMITUniversityVietnam/" target="_blank"><i className="fab fa-youtube" aria-hidden="true"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Header Menu */}
                    <div className="header_container">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="header_content d-flex flex-row align-items-center justify-content-start">
                                        <div className="logo_container mr-auto">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyl7lGjkizMvWv7tfIzT_AQJcNsdf1DtVfeO57o4qj1wCWwscY6g&s"
                                                alt="logo_img" height={30} width={30} />
                                            <Link to ='/'>
                                                <div className="logo_text">RMIT</div>
                                            </Link>
                                        </div>
                                        <nav className="main_nav_container">
                                            <ul className="main_nav">
                                                <li className="active">
                                                    <Link to="/">Home</Link>
                                                </li>
                                                <li>
                                                    <Link to='/ProjectView'>Projects</Link>
                                                </li>
                                                <li>
                                                    <Link to="/Contact">Contact</Link>
                                                </li>
                                              
                                            </ul>
                                        </nav>
                                        <div className="header_content_right ml-auto text-right">
                                            <div className="header_search">
                                                <div className="search_form_container">
                                                    <form action="#" id="search_form" className="search_form trans_400">
                                                        <input type="search" className="header_search_input trans_400" placeholder="Type for Search" required="required" />
                                                        <div className="search_button">
                                                            <i className="fa fa-search" aria-hidden="true"></i>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>

                                            <div className="user">
                                                <button className="btn btn-sm dropdown-toggle" type="button" id="dropdownmenu"
                                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fa fa-user" aria-hidden="true"></i>
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="dropdownmenu">
                                                    <li className="dropdown-item" >
                                                        <Link to='/Login'>Login</Link>
                                                    </li>       
                                                    <li className="dropdown-item" >
                                                        <Link to='/Register'>Register</Link>
                                                    </li>                                            
                                                </div>
                                            </div>
                                            <div className="hamburger menu_mm">
                                                <i className="fa fa-bars menu_mm" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Hamburger */}
                <div className="menu d-flex flex-column align-items-end justify-content-start text-right menu_mm trans_400">
                    <div className="menu_close_container"><div className="menu_close"><div></div><div></div></div></div>
                    <div className="search">
                        <form action="#" className="header_search_form menu_mm">
                            <input type="search" className="search_input menu_mm" placeholder="Search" required="required" />
                            <button className="header_search_button d-flex flex-column align-items-center justify-content-center menu_mm">
                                <i className="fa fa-search menu_mm" aria-hidden="true"></i>
                            </button>
                        </form>
                    </div>
                    <nav className="menu_nav">
                        <ul className="menu_mm">
                            <li className="menu_mm"><a href="/">Home</a></li>
                            <li><Link to='/ProjectView'>Projects</Link></li>
                            <li><Link to='/Contact'>Contact</Link></li>
                            <li><Link to='/Login'>Login</Link></li>

                        </ul>
                    </nav>
                    <div className="menu_extra">
                        <div className="menu_phone"><span className="menu_title">phone:</span>+84 123456789</div>
                        <div className="menu_social">
                            <span className="menu_title">follow us</span>
                            <ul>
                                <li><a href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}