import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation';
import Homepage from './components/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import ProjectCRUD from './components/Projects/ProjectCRUD';
import Register from './components/Auth/auth/Register';
import Login from './components/Auth/auth/Login';
import Upload from './components/Upload/Upload';
import Contact from './components/Projects/Contact/Contact';
import ProjectView from './components/Projects/ProjectView';
import ProjectDetail from './components/Projects/ProjectDetail';
import UserCRUD from './components/Projects/UserCRUD';
import Search from './components/Projects/Search';
import Sort1718 from './components/Projects/Sort1718';
import Sort1817 from './components/Projects/Sort1817';
import Student17 from './components/Projects/Student17';
import Student18 from './components/Projects/Student18';
import Ucd from './components/Projects/Ucd';
import Webpp from './components/Projects/Webpp';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      authenticated: 0
    }
  }


  componentWillMount() {
    this.setState({ authenticated: window.sessionStorage.getItem('authenticated') })
  }

  logout() {
    window.sessionStorage.setItem('authenticated', 0)
    this.setState({ authenticated: window.sessionStorage.getItem('authenticated') })
  }


  render() {
    return (
      <div>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/Register' component={Register} />
            <Route path='/Upload' component={Upload} />
            <Route path='/ProjectCRUD' component={ProjectCRUD} />
            <Route path='/UserCRUD' component={UserCRUD} />
            <Route path='/Contact' component={Contact} />
            <Route path='/ProjectView' component={ProjectView} />
            <Route path='/ProjectDetail/:projectID/:idStudent/:nameStudent/:yearStudent/:idCourse/:nameCourse/:semester/:nameAsm/:descriptionAsm/:percentageAsm/:technology/:scope/:description/:companyLink/:application/:imgURL'
             component={ProjectDetail}/>
            <Route path='/Search' component ={Search}/>
            <Route path='/Sort1718' component ={Sort1718}/>
            <Route path='/Sort1817' component ={Sort1817}/>
            <Route path='/Student17' component ={Student17}/>
            <Route path='/Student18' component ={Student18}/>
            <Route path='/Ucd' component ={Ucd}/>
            <Route path='/Webpp' component ={Webpp}/>


            {window.sessionStorage.getItem('authenticated') == 1 ?
              <div className='container' style={{ marginTop: 150, marginBottom: 150 }}>
                <div className='row d-flex'>
                  <div className='p-2'>
                    <p>
                      <Link to='/'>
                        <i class="fas fa-arrow-left" style={{ marginRight: 10 }} />
                        Back to home
                    </Link>
                    </p>
                  </div>
                  <div className='ml-auto p-2'>
                    <button className='btn btn-outline-info' onClick={this.logout.bind(this)}>Logout</button>
                  </div>
                </div>
                <div className='row d-flex flex-row align-items-center justify-content-center'>
                  <div className='welcome'>

                    <h3><b>Welcome</b>  admin!</h3>
                    <p>-Now you can edit projects and users-</p>

                  </div>
                </div>
                <div className='row'style={{marginTop:50}}>
                  <div className="col-6 d-flex flex-row align-items-center justify-content-center">
                    <span className='border border-dark rounded'>
                      <Link to='/ProjectCRUD' style={{ width: 150 }} className='btn btn-large'> Project CRUD</Link>
                    </span>
                  </div>
                  <div className="col-6 d-flex flex-row align-items-center justify-content-center">
                    <span className='border border-dark rounded'><Link to='/UserCRUD'  style={{ width: 150 }} className='btn btn-large'> User CRUD</Link>
                    </span>
                    

                  </div>
                </div>

              </div>
              :
              <div><Login/>

              </div>
            }
          </Switch>
          <Footer />
        </BrowserRouter>

      </div>
    )
  }
}

