import React from 'react'

export default class Upload extends React.Component {

    constructor() {
        super()
        this.state = { fileName: '' }
    }

    upload() {

        const myFileInputs = document.querySelector("input[type='file']")

        const formData = new FormData()
        formData.append('myFile', myFileInputs.files[0])

        fetch('http://localhost:9000/upload/uploadfile', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({ fileName: data.originalname })
                alert("Upload file successfully")
            })
    }

    render() {
        return (
            <div className='container' style={{marginLeft:150}}>
                <div className='col-6'>
                        <input className='form-control' placeholder='File name' type='text' id='fileName' name='fileName' value={this.state.fileName} />
                        <input className='form-control' type="file"  id="inputFile" />
                        <div className="input-group-append">
                        <button className="btn btn-outline-info" type="button" onClick={this.upload.bind(this)}>Upload</button>
                    </div>
                </div>
            </div>

        )
    }

}