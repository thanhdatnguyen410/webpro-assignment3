import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Upload from '../Upload/Upload'


const url = "http://34.218.240.102:9000/api/projects"

export default class ProjectCRUD extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            projects: [],
            projectID: '',
            idStudent: '',
            nameStudent: '',
            yearStudent: '',
            idCourse: "",
            nameCourse: '',
            semester: "",
            nameAsm: "",
            descriptionAsm: "",
            percentageAsm: "",
            technology: "",
            scope: "",
            description: "",
            companyLink: '',
            application: "",
            imgURL:"",
            addNew: true,
    }}


    fetchProjects() {
        fetch(url)
            .then(res => res.json())
            .then(json => {
                this.setState({ projects: json })
            })
    }

    componentDidMount() {
        this.fetchProjects()
    }

    handleChange(e) {
        var obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)
    }

    save() {
        if (window.confirm('Do you want to save?')) {
            if (this.state.addNew === true) {
                fetch(url, {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                       
                    },
                    body: JSON.stringify({
                        projectID: this.state.projectID, idStudent: this.state.idStudent, nameStudent: this.state.nameStudent, idCourse: this.state.idCourse,
                        nameCourse: this.state.nameCourse, semester: this.state.semester, nameAsm: this.state.nameAsm, descriptionAsm: this.state.descriptionAsm,
                        percentageAsm: this.state.percentageAsm, technology: this.state.technology, scope: this.state.scope, description: this.state.description, 
                        companyLink: this.state.companyLink, application: this.state.application, imgURL: this.state.imgURL
                    })
                })
                    .then(res => res.json())
                    .then(json => this.fetchProjects())
            }
            else {
                fetch(url, {
                    method: 'put',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                       
                    },
                    body: JSON.stringify({
                        projectID: this.state.projectID, idStudent: this.state.idStudent, nameStudent: this.state.nameStudent, idCourse: this.state.idCourse,
                        nameCourse: this.state.nameCourse, semester: this.state.semester, nameAsm: this.state.nameAsm, descriptionAsm: this.state.descriptionAsm,
                        percentageAsm: this.state.percentageAsm, technology: this.state.technology, scope: this.state.scope, description: this.state.description, 
                        companyLink: this.state.companyLink, application: this.state.application, imgURL: this.state.imgURL
                    })
                })
                    .then(res => res.json())
                    .then(json => this.fetchProjects())
            }
        }
    }

    edit(projectID,nameStudent,idStudent,yearStudent,idCourse,nameCourse,semester,nameAsm,descriptionAsm,
        percentageAsm,technology,scope,description,companyLink,application,imgURL) {
        if (window.confirm('Do you want to edit?')) {
            this.setState({ projectID: projectID, nameStudent:nameStudent, idStudent: idStudent, yearStudent:yearStudent,idCourse:idCourse,
                nameCourse:nameCourse,semester:semester,nameAsm:nameAsm,descriptionAsm:descriptionAsm,percentageAsm:percentageAsm,
                technology:technology,scope:scope,description:description,companyLink:companyLink,application:application,imgURL:imgURL ,addNew: false })
        }
    }

    delete(projectID) {
        if (window.confirm('Do you want to delete?')) {
            fetch(url + "/" + projectID, {
                method: 'delete',
            }
            ).then(res => res.json())
                .then(json => this.fetchProjects())
        }
    }

    add() {
        if (window.confirm('Do you want to add?')) {
            this.setState({ addNew: true })
        }
    }

    render() {
        return (
            <div className='row justify-content-center' style={{marginTop:150,marginBottom:50}}>
                <div className='col-md-6'>
                    <div className="card" >
                        <div className="card-header"><h1> Project list</h1></div>
                        <div className="card-body">
                            {this.state.projects.map(s =>
                                    <div className='card' style={{margin:20}}>
                                        <div className='card-header'>
                                            <strong>Projects: </strong>{s.projectID}
                                        </div>
                                        <ul className='list-group list-group-flush'>
                                            {/* <li className="list-group-item"><strong> ID:</strong> {s.id}</li> */}

                                            {/* Student */}
                                            <li className="list-group-item" key={s.nameStudent}><strong>Name of student:</strong> {s.nameStudent}</li>
                                            <li className="list-group-item"><strong>ID of student:</strong> {s.idStudent}</li>
                                            <li className="list-group-item"><strong>Year of student:</strong> {s.yearStudent}</li>

                                            {/* Course */}
                                            <li className="list-group-item"><strong>Course name:</strong> {s.nameCourse}</li>
                                            <li className="list-group-item"><strong>Course ID:</strong> {s.idCourse}</li>

                                            <li className="list-group-item"><strong>Semester:</strong> {s.semester}</li>

                                            {/* Assignment */}
                                            <li className="list-group-item"><strong>Asm name:</strong> {s.nameAsm}</li>
                                            <li className="list-group-item"><strong>Description on assignment:</strong> {s.descriptionAsm}</li>
                                            <li className="list-group-item"><strong>Percentage of assignment:</strong> {s.percentageAsm}</li>

                                            <li className="list-group-item"><strong>Technology:</strong> {s.technology}</li>
                                            <li className="list-group-item"><strong>Scope:</strong> {s.scope}</li>
                                            <li className="list-group-item"><strong>Description:</strong> {s.description}</li>
                                            <li className="list-group-item"><strong>Company:</strong> {s.companyLink}</li>
                                            <li className="list-group-item"><strong>Application:</strong> {s.application}</li>
                                            <li className="list-group-item"><strong>ImgURL:</strong> {s.imgURL}</li>



                                        </ul>
                                        <div className='btn-group' role="group" aria-label="Button Group List">
                                            <button className='btn btn-outline-primary' type='button' onClick={this.edit.bind(this, s.projectID, s.nameStudent, s.idStudent, s.yearStudent, s.idCourse,
                                                s.nameCourse,s.semester,s.nameAsm, s.descriptionAsm,s.percentageAsm,s.technology,s.scope, s.description, s.companyLink, s.application, s.photo,s.video)}>Edit</button>
                                            <button className='btn btn-outline-primary' type='button' onClick={this.delete.bind(this, s.projectID)}>Delete</button>
                                        </div>
                                    </div>

                            )}
                        </div>
                        <br/>
                        <div className='container' style={{marginTop:50}}>
                        <div className="card">
                            <div className='card-header'><h5>Edit Projects</h5></div>
                            <div className='card-body'>
                                <ul className='list-group list-group-flush'>
                                    <li className="list-group-item">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1">Project ID: </span>
                                            <input className='form-control'  type="text" id="projectID" name="projectID" value={this.state.projectID}
                                                onChange={this.handleChange.bind(this)}
                                            ></input>
                                        </div>
                                    </li>

                                    <li className="list-group-item">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon2">Student name:</span>
                                            <input className='form-control' type="text" id="nameStudent" name="nameStudent" value={this.state.nameStudent}
                                                onChange={this.handleChange.bind(this)}
                                            ></input>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon3">Student ID:</span>
                                            <input className='form-control'  type='text' id="idStudent" name="idStudent" value={this.state.idStudent}
                                                onChange={this.handleChange.bind(this)}
                                            ></input></div></li>
                                    <li className="list-group-item">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon4">Student Year:</span>
                                            <input className='form-control' type="text" id="yearStudent" name="yearStudent" value={this.state.yearStudent}
                                                onChange={this.handleChange.bind(this)}
                                            ></input>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon5">Course ID:</span>
                                            <input className='form-control' type="text" id="idCourse" name="idCourse" value={this.state.idCourse}
                                                onChange={this.handleChange.bind(this)}
                                            ></input>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon6">Course Name:</span>
                                            <input className='form-control' type="text" id="nameCourse" name="nameCourse" value={this.state.nameCourse}
                                                onChange={this.handleChange.bind(this)}
                                            ></input>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon7">Semester:</span>
                                            <input className='form-control' type="text" id="semester" name="semester" value={this.state.semester}
                                                onChange={this.handleChange.bind(this)}
                                            ></input>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon8">Asm Name:</span>
                                            <input className='form-control' type="text" id="nameAsm" name="nameAsm" value={this.state.nameAsm}
                                                onChange={this.handleChange.bind(this)}
                                            ></input>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon9">Asm Description:</span>
                                            <input className='form-control' type="text" id="descriptionAsm" name="descriptionAsm" value={this.state.descriptionAsm}
                                                onChange={this.handleChange.bind(this)}
                                            ></input>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon10">Asm Percentage:</span>
                                            <input className='form-control' type="text" id="percentageAsm" name="percentageAsm" value={this.state.percentageAsm}
                                                onChange={this.handleChange.bind(this)}
                                            ></input>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon11">Tech:</span>
                                            <input className='form-control' type="text" id="technology" name="technology" value={this.state.technology}
                                                onChange={this.handleChange.bind(this)}
                                            ></input>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon12">Scope:</span>
                                            <input className='form-control' type="text" id="scope" name="scope" value={this.state.scope}
                                                onChange={this.handleChange.bind(this)}
                                            ></input>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon13">Description:</span>
                                            <input className='form-control' type="text" id="description" name="description" value={this.state.description}
                                                onChange={this.handleChange.bind(this)}
                                            ></input>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon14">Company:</span>
                                            <input className='form-control' type="text" id="companyLink" name="companyLink" value={this.state.companyLink}
                                                onChange={this.handleChange.bind(this)}
                                            ></input>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon15">Application:</span>
                                            <input className='form-control' type="text" id="application" name="application" value={this.state.application}
                                                onChange={this.handleChange.bind(this)}
                                            ></input>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon15">Image URL:</span>
                                            <input className='form-control' type="text" id="imgURL" name="imgURL" value={this.state.imgURL}
                                                onChange={this.handleChange.bind(this)}
                                            ></input>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                    <span class="input-group-text" id="basic-addon15">Upload files:</span>
                                            <Upload/>
                                    </li>
                                    <div className='btn-group' role="group" aria-label="Button Group List">
                                        <button className='btn btn-outline-primary' type='button' onClick={this.save.bind(this)}>Save</button>
                                        <button className='btn btn-outline-primary' type='button' onClick={this.add.bind(this)}>Add new</button>
                                    </div>
                                </ul>

                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}