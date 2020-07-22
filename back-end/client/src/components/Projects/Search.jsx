import React from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import './search.css'
class Search extends React.Component {
    state = {
        users: []
    };

    async componentDidMount() {
        const { data: users } = await axios.get(
            "http://34.218.240.102:9000/api/projects"
        );
        this.setState({ users });
    }
    searchChanged = event => {
        this.setState({ search: event.target.value })
    }//create header, using axios to get users
    render() {
        return (
            <div className='container' style={{ marginTop: 150, marginBottom: 100 }}>
                <div className='row d-flex justify-content-start align-items-center'>
                    <div className='p-2'>
                        <p>
                            <Link to='/ProjectView'>
                                <i class="fas fa-arrow-left" style={{ marginRight: 10 }} />
                                Back to projects
                            </Link>
                        </p>
                    </div>
                </div>
                <div className='p-2'>
                    <h5>Please enter name of student:</h5>
                </div>
                <div className="p-2" >
                    <input type='text' className="form-control" onChange={this.searchChanged} 
                    value={this.state.search} placeholder="Search..." />
                    <div className='col-md-5' style={{marginTop:30}}>         
                    {this.state.users
                        .filter(user => user.nameStudent.includes(this.state.search))
                        .map(user => (
                            <ul key={user.ProjectID} class="card card-cascade product-card">
                                <h5 className='card-text text-center'>Name: {user.nameStudent}</h5>
                                <h5 className='card-text text-center'>id: {user.idStudent}</h5>
                                <h5 className='card-text text-center'>Course: {user.nameCourse}</h5>
                                <h5 className='card-text text-center'>Asm: {user.nameAsm}</h5>
                                <h5 className='card-text text-center'>Sem: {user.semester}</h5>
                                <h5 className='detail trans_200'><Link to={`/ProductDetail/${user.projectID}/${user.idStudent}/${user.nameStudent}/${user.yearStudent}/${user.idCourse}/${user.nameCourse}/${user.semester}/${user.nameAsm}/${user.descriptionAsm}
                                /${user.percentageAsm}/${user.technology}/${user.scope}/${user.description}/${user.companyLink}/${user.application}/${user.imgURL}`}>
                                    <button className='btn btn-outline-primary text-center'>Details...</button>
                                </Link></h5>
                            </ul>
                        )
                        )}
                        </div>   
                </div>
            </div>
        );
    }
}
export default Search;