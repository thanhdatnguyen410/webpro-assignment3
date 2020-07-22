import React from 'react'
import {Link} from 'react-router-dom'
import './footer.css'

export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="footer_body">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 footer_col">
                                    <div className="newsletter_container d-flex flex-column align-items-start justify-content-end">
                                        <div className="footer_logo mb-auto"><Link to='/ProjectView'>RMIT Projects</Link></div>
                                        <div className="footer_title">Feedback</div>
                                        <form action="#" id="newsletter_form" className="newsletter_form">
                                            <input type="email" className="newsletter_input" placeholder="Email" required="required" />
                                            <button className="newsletter_button"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                                        </form>
                                    </div>
                                </div>

                                <div className="col-lg-2 offset-lg-3 footer_col">
                                    <div>
                                        <div className="footer_title">About Us</div>
                                        <ul className="footer_list">
                                            <li><Link to='/ProjectView'>Projects</Link></li>
                                            <li><a>Team</a></li>
                                            <li><Link to='/Contact'>Contact us</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-2 footer_col">
                                    <div className="footer_title">Help & Support</div>
                                    <ul className="footer_list">
                                        <li><a href="https://www.rmit.edu.vn/vi">RMIT</a></li>
                                        <li><a href="https://www.rmit.edu.vn/about-us/why-choose-rmit">RMIT FAQs</a></li>
                                        <li><a href="https://www.rmit.edu.vn/research">RMIT Research</a></li>
                                    </ul>
                                </div>

                                <div className="col-lg-2 footer_col ">
                                    <div>
                                        <div className="footer_title">Location</div>
                                        <ul className='footer_list'>
                                            <li>702 Nguyen Van Linh, District 7, Ho Chi Minh City</li>
                                            <li><i className="fa fa-phone mr-3"></i>(+848) 3776 1300</li>
                                            <li><i className="fa fa-envelope mr-3"></i>enquiries@rmit.edu.vn</li>
                                        </ul>

                                        <div className="mapouter">
                                            <div className="gmap_canvas"><iframe width="172" height="166" id="gmap_canvas" src="https://maps.google.com/maps?q=RMIT%20Nam&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                                            </iframe><a href="https://www.embedgooglemap.net/blog/private-internet-access-coupon/"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <div className='container'>
                            <div className='row'>
                                <div className='col'>
                                    <div className="copyright_content d-flex flex-md-row flex-column align-items-md-center align-items-start justify-content-start">
                                        <div className="cr">© 2019. All Rights Reserved.</div>
                                        <div className="cr_right ml-md-auto">
                                            <div className="footer_phone">
                                                <span className="cr_title">phone:</span>+123 456 789
                                            </div>
                                            <div className="footer_social">
                                                <span className="cr_social_title">follow us</span>
                                                <ul>
                                                    <li><a href="https://www.facebook.com/RMITUniversityVietnam"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
                                                    <li><a href="https://www.instagram.com/rmituniversityvietnam/"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                                                    <li><a href="https://www.youtube.com/c/RMITUniversityVietnam/"><i className="fab fa-youtube" aria-hidden="true"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}