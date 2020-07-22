import React from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

const url = "http://34.218.240.102:9000/api/projects"


const Wrapper = styled.section`
    padding: 4em;
    background-color: "white-smoke";
`
const PageNumber = styled.span`
    color: rgb(62, 140, 204);
    user-select: none;
    cursor: pointer;
    margin: 0 3px;
    padding: 0 5px;
    border: 1px solid rgb(62, 140, 204);
    text-align: center;
    border-radius: 2px;
`
class GridItem extends React.Component {
    render() {
        return (
            <div className='card rounded' key={this.props.stt}>
                <div className='card-header'>{this.props.stt}</div>
                <div className='card-body'>
                    <div className='card-img'>
                        <img src={this.props.data.imgURL} alt="imgTable" className='img-fluid' height={300} width={300} />
                    </div>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <strong>Project ID:</strong>
                            {this.props.data.projectID}
                        </li>
                        <li className='list-group-item'>
                            <strong>Project name:</strong>
                            {this.props.data.nameAsm}
                        </li>
                        <li className='list-group-item'>
                            <strong>Student: </strong>
                            {this.props.data.nameStudent} 
                </li>
                        <li className='list-group-item'>
                            <Link to={`/ProjectDetail/${this.props.data.projectID}/${this.props.data.idStudent}/${this.props.data.nameStudent}
                    /${this.props.data.yearStudent}/${this.props.data.idCourse}/${this.props.data.nameCourse}/${this.props.data.semester}/${this.props.data.nameAsm}
                    /${this.props.data.descriptionAsm}/${this.props.data.percentageAsm}/${this.props.data.technology}/${this.props.data.scope}/${this.props.data.description}
                    /${this.props.data.companyLink}/${this.props.data.application}/${this.props.data.imageURL}`}>
                                <button className='btn btn-outline-secondary'> More details...</button>
                            </Link>
                        </li >
                    </ul>
                </div>
            </div>
        )
    }
}

export default class ProjectView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: [],
            currentPage: 1,
            projectsPerPage: 3
        }
        this.chosePage = this.chosePage.bind(this)

    }

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

    chosePage(event) {
        this.setState({
            currentPage: Number(event.target.id)
        })
    }

    render() {
        //get current posted projects
        var projectList = this.state.projects
        const currentPage = this.state.currentPage
        const projectsPerPage = this.state.projectsPerPage

        const indexOfLastProject = currentPage * projectsPerPage
        const indexOfFirstProject = indexOfLastProject - projectsPerPage
        //get a new list for present page
        const currentNewList = projectList.slice(indexOfFirstProject, indexOfLastProject)
        //set stt for pages
        const renderNewList = currentNewList.map((todo, index) => {
            return <GridItem stt={index + 1 + (currentPage - 1) * projectsPerPage} key={index} data={todo} />
        })
        
        //get page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(projectList.length / projectsPerPage); i++) {
            pageNumbers.push(i);
        }
        return (

            <div className='container-fluid' style={{ marginTop: 150, marginBottom: 50 }}>
                
                <div className='row d-flex justify-content-left pb-4 courses'>
                    <div className="filter btn-outline-primary">
                        <button className="btn btn-sm dropdown-toggle" type="button" id="dropdownmenu"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-filter fa-lg" aria-hidden="true"></i>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownmenu">
                            <li className="dropdown-item" href="#">
                                <Link to="/Student17">2017</Link>
                            </li>
                            <li className="dropdown-item" href="#">
                                <Link to="/Student18">2018</Link>
                            </li>
                            <li className="dropdown-divider" ></li>
                            <li className="dropdown-item" href="#">
                                <Link to="/Ucd">UCD</Link>
                            </li>
                            <li className="dropdown-item" href="#">
                                <Link to="/webpp">WebPP</Link>
                            </li>
                        </div>
                    </div>
                    <div className="filter btn-outline-primary">
                        <button className="btn btn-sm dropdown-toggle" type="button" id="dropdownmenu"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-sort fa-2x" aria-hidden="true"></i>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownmenu">
                            <li className="dropdown-item" href="#">
                                <Link to="/Student17">2016-2018</Link>
                            </li>
                            <li className="dropdown-item" href="#">
                                <Link to="/Sort1817">2018-2016</Link>
                            </li>
                        </div>
                    </div>
                    <div className='ml-auto p-2'>
                        <p className='justify-content-end'>
                            <Link to='/Search'>
                                Go to search
                                <i class="fas fa-arrow-right" style={{ marginLeft: 10 }} />
                            </Link>
                        </p>
                    </div>
                </div>
                <Wrapper style={{ marginTop: -20 }}>                    
                    <div className='row'>
                        <div className='col-md-2'>
                        </div>
                        <div className='col-md-9'>
                            <div className='card-columns'>
                                {renderNewList}
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className="pagination-custom">
                            <ul id="page-numbers">
                                {pageNumbers.map(number => {
                                    if (this.state.currentPage === number) {
                                        return (
                                            <PageNumber>
                                                <span key={number} id={number} className="active">
                                                    {number}
                                                </span>
                                            </PageNumber>
                                        )
                                    }
                                    else {
                                        return (
                                            <PageNumber>
                                                <span key={number} id={number} onClick={this.chosePage}>
                                                    {number}
                                                </span>
                                            </PageNumber>
                                        )
                                    }
                                }
                                )}
                            </ul>
                        </div>
                    </div>
                </Wrapper>
            </div>
        )
    }
}



