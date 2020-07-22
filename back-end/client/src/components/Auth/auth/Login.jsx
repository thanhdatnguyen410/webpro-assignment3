import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./login.css"
export default class Login extends Component {

  constructor(){
    super()
    this.state = {username: '', password: ''}
  }

  onChangeHandle(e){
    var obj = {}
    obj[e.target.name] = e.target.value
    this.setState(obj)
  }

  login(){
    var user = {username: this.state.username, password: this.state.password}
    fetch('http://localhost:9000/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data => {
      if(data.result == 'authenticated'){
        alert('Login successfully')
        
        window.sessionStorage.setItem('authenticated',1)
        window.location.reload();
      }
      else{
        alert('Wrong username or password')
        window.sessionStorage.setItem('authenticated',0)
      }
    })

  }


  render() {
    return (
      <div className='container' style={{ marginTop: 200, marginBottom:50}}>
        <div className='row'>
          <div className='col-3 '>
            <p className='justify-content-end'>
              <Link to='/'>
                <i class="fas fa-arrow-left" style={{ marginRight: 10 }} />
                Back to home
                </Link>
            </p>
          </div>
        </div>
        <div className='row d-flex flex-row align-items-center justify-content-center'>
          <div className='col-md-5'>
            <h3><b>Login</b> now!</h3>
            <br />
            <form noValidate onSubmit={this.onSubmit} action="">
           
              <div className='form-row'>
                <div className='col-10'>
                  <div className='form-group'>       
                    Username:            
                    <input
                      onChange={this.onChangeHandle.bind(this)} value={this.state.username}
                      id="username"
                      name="username"
                      type="text"
                      className="form-control"/>
                  </div>
                </div>
              </div>
              <div className='form-row'>
                <div className='col-10'>
                  <div className='form-group'>       
                    Password:            
                    <input
                      onChange={this.onChangeHandle.bind(this)} value={this.state.password}
                      id="password"
                      name="password"
                      type="password"
                      className="form-control"/>
                  </div>
                </div>
              </div>
              <button type='submit'className="btn btn-outline-info" onClick={this.login.bind(this)}>Login</button>
            </form>            
          </div>
        </div>
      </div>
    )
  }
}



