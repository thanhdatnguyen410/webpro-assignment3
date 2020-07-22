import React from 'react'

const url = "http://34.218.240.102:9000/api/api-user/users"

export default class UserCRUD extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            userID:'',
            userName:'',
            userEmail:'',
            addNew: true,
    }}


    fetchUsers() {
        fetch(url)
            .then(res => res.json())
            .then(json => {
                this.setState({ users: json })
            })
    }

    componentDidMount() {
        this.fetchUsers()
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
                        userID: this.state.userID, userName: this.state.userName, userEmail:this.state.userEmail
                    })
                })
                    .then(res => res.json())
                    .then(json => this.fetchUsers())
            }
            else {
                fetch(url, {
                    method: 'put',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                       
                    },
                    body: JSON.stringify({
                        userID: this.state.userID, userName: this.state.userName, userEmail:this.state.userEmail
                    })
                })
                    .then(res => res.json())
                    .then(json => this.fetchUsers())
            }
        }
    }

    edit( userID, userName, userEmail  ) {
        if (window.confirm('Do you want to edit?')) {
            this.setState({  userID: userID, userName: userName, userEmail:userEmail  ,addNew: false })
        }
    }

    delete(userID) {
        if (window.confirm('Do you want to delete?')) {
            fetch(url + "/" + userID, {
                method: 'delete',
            }
            ).then(res => res.json())
                .then(json => this.fetchUsers())
        }
    }

    add() {
        if (window.confirm('Do you want to add?')) {
            this.setState({ addNew: true })
        }
    }


    render() {
        return (
            <div className='row justify-content-center' style={{marginTop:150,marginBottom:30}}>
                <div className='col-md-6'>
                    <div className="card">
                        <div className="card-header"><h1> Create Admin User</h1></div>
                        <div className="card-body">
                            {this.state.users.map(s =>
                                    <div className='card'>
                                        <div className='card-header'>
                                            <strong>List of Admin User: </strong>{s.userID}
                                        </div>
                                        <ul className='list-group list-group-flush'>
                                            {/* <li className="list-group-item"><strong> ID:</strong> {s.id}</li> */}

                                            {/* ADMIN */}
                                            <li className="list-group-item" key={s.userID}><strong>User ID:</strong> {s.userID}</li>
                                            <li className="list-group-item" key={s.userName}><strong>Name of User:</strong> {s.userName}</li>
                                        
                                            <li className="list-group-item" key={s.userEmail}><strong>User Email:</strong> {s.userEmail}</li>

                                        </ul>
                                        <div className='btn-group' role="group" aria-label="Button Group List">
                                            <button className='btn btn-outline-primary' type='button' onClick={this.edit.bind(this, s.userName, s.userID, s.userEmail
                                            )}>Edit</button>
                                            <button className='btn btn-outline-primary' type='button' onClick={this.delete.bind(this, s.userID)}>Delete</button>
                                        </div>
                                    </div>

                            )}
                        </div>
                        <br/>
                    
                        <div className="card" >
                            <div className='card-header'><h5>Edit User</h5></div>
                            <div className='card-body'>
                                <ul className='list-group list-group-flush'>
                                    <li className="list-group-item">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1"> User Name:</span>
                                            <input className='form-control'  type="text" id="userName" name="userName" value={this.state.userName}
                                                onChange={this.handleChange.bind(this)}
                                            ></input>
                                        </div>
                                    </li>

                                    <li className="list-group-item">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1">User ID</span>
                                            <input className='form-control' type="text" id="userID" name="userID" value={this.state.userID}
                                                onChange={this.handleChange.bind(this)}
                                            ></input>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1">User Email</span>
                                            <input className='form-control'  type='text' id="userEmail" name="userEmail" value={this.state.userEmail}
                                                onChange={this.handleChange.bind(this)}
                                    ></input></div></li>
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
        )
    }
}