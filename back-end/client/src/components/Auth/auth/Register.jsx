import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import classnames from "classnames"
import './register.css'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state= {
            name: "",
            email:"",
            password:"",
            password2:"",
            errors: {}
        }
    }
    
    

    onChange = e => {
        this.setState = {[e.target.id]: e.target.value}
    }

    //prevent loading page when clicking submit button
    onSubmit = e => {
        e.preventDefault()
    }

    

    render() {
        
        const newUser = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2
        }
        const {errors} = this.state
       
        return (
            <div className='container' style={{marginTop: 200, marginBottom: 50}}>
                <div className='row'>
                    <div className='col-3 '>
                        <p className= 'justify-content-end'>
                            <Link to='/'> 
                                <i class="fas fa-arrow-left"style={{marginRight:10}}/>
                                Back to home
                            </Link>
                        </p>
                    </div>
                </div>
                <div className='row d-flex flex-row align-items-center justify-content-center'>
                    <div className='col-md-5'>
                        <h3> <b>Register</b> now!</h3>
                        <br/>
                        <p>Already have an account? <Link to='/Login'>Login</Link></p>
                        <form  noValidate onSubmit={this.onSubmit} action="">
                            <div className='form-row'>
                                <div className='col-10'>
                                    <div className='form-group'>

                                        <label htmlFor="name" >Name</label>
                                        <span className="red-text">{errors.name}</span>
                                        <input onChange={this.onChange} value={this.state.name} error={errors.name}
                                            type="text"
                                            id="name" required
                                            className={classnames("form-control", { invalid: errors.name })} />
                                    </div>
                                </div>
                            </div>
                            <div className='form-row'>
                                <div className='col-10'>
                                    <div className='form-group'>
                                        <label htmlFor="email" >Email</label>
                                        <span className="red-text">{errors.email}</span>
                                        <input onChange={this.onChange} value={this.state.email} error={errors.email}
                                            type="email"
                                            id="email" required
                                            className={classnames("form-control", { invalid: errors.email })} />
                                    </div>
                                </div>
                            </div>
                            <div className='form-row'>
                                <div className='col-10'>
                                    <div className='form-group'>

                                        <label htmlFor="password" >Password</label>
                                        <span className="red-text">{errors.password}</span>
                                        <input onChange={this.onChange} value={this.state.password} error={errors.password}
                                            type="password"
                                            id="password" required
                                            className={classnames("form-control", { invalid: errors.password })} />
                                    </div>
                                </div>
                            </div>
                            <div className='form-row'>
                                <div className='col-10'>
                                    <div className='form-group'>
                                        <label htmlFor="password2" >Confirm password</label>
                                        <span className="red-text">{errors.password2}</span>
                                        <input onChange={this.onChange} value={this.state.password2} error={errors.password2}
                                            type="password"
                                            id="password2" required
                                            className={classnames("form-control", { invalid: errors.password2 })} />
                                    </div>
                                </div>
                            </div>
                            <button type='submit'className="btn btn-outline-info">SIGN UP</button>
                        </form>
                    </div>
                </div>
               
            </div>
        );
    }
}
export default Register
