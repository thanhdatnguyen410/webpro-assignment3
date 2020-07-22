import React from 'react'
import style from 'styled-components'
import "./homepage.css"
import { Link } from 'react-router-dom'

export default class Homepage extends React.Component {
    render() {
        return (
            <div>
                <div className="home">
                        <div className="home_background"></div>
                    <div className="home_content">
                        <div className="container">
                            <div className="row">
                                <div className="col text-center">
                                    <h1 className="home_title">Student Project Artefacts </h1>
                                    <div className="home_button trans_200"><Link to ='/ProjectView'>get more...</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}