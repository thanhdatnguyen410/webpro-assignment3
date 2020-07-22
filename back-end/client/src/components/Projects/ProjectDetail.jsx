import React from 'react'



export default class ProjectDetail extends React.Component {

//State Detail 
    render() {
        return (
            <div className='row justify-content-center' style={{marginTop:150}}>
            <div className='col-md-6'>
            <div className="card">
                <div className="card-body">
                <div className="card">
                    <div className="card-header"><h1> Project Detail</h1></div>
                </div>
            <div>
                
                <div>
                  <li className="list-group-item"><strong>Project ID:</strong> {this.props.match.params.projectID}</li>

                </div>

                <div>
                    <li className="list-group-item"><strong>Student ID:</strong> {this.props.match.params.idStudent}</li>

                </div>

                <div>
                    <li className="list-group-item"><strong>Student Name:</strong> {this.props.match.params.nameStudent}</li>
                    
                </div>

                <div>
                    <li className="list-group-item"><strong>Student Year:</strong> {this.props.match.params.yearStudent}</li>
                   
                </div>

                <div>
                    <li className="list-group-item"><strong>Course ID:</strong> {this.props.match.params.idCourse}</li>
                  
                </div>

                <div>
                    <li className="list-group-item"><strong>Course Name:</strong> {this.props.match.params.nameCourse}</li>
                   
                </div>

                <div>
                    <li className="list-group-item"><strong>Semester:</strong> {this.props.match.params.semester}</li>
                  
                </div>

                <div>
                    <li className="list-group-item"><strong>Asm Name:</strong> {this.props.match.params.nameAsm}</li>
                 
                </div>

                <div>
                   <li className="list-group-item"><strong>Asm Description:</strong> {this.props.match.params.descriptionAsm}</li>
                    
                </div>

                <div>
                   <li className="list-group-item"><strong>Percentage Description:</strong> {this.props.match.params.percentageAsm}</li>
                    
                </div>
                
                <div>
                   <li className="list-group-item"><strong>Technology:</strong> {this.props.match.params.technology}</li>
                    
                </div>

                <div>
                   <li className="list-group-item"><strong>Scope:</strong> {this.props.match.params.scope}</li>
                    
                </div>
                <div>
                   <li className="list-group-item"><strong>Description:</strong> {this.props.match.params.description}</li>
                    
                </div>
                <div>
                   <li className="list-group-item"><strong>Company:</strong> {this.props.match.params.companyLink}</li>
                    
                </div>

                <div>
                   <li className="list-group-item"><strong>Application:</strong> {this.props.match.params.application}</li>
                    
                </div>
                <div>
                   <li className="list-group-item"><strong>Image URL:</strong> {this.props.match.params.imgURL}</li>
                    
                </div>
                 </div>
             </div>
          </div>
        </div>
    </div>
        )
    }

}