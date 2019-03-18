import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { CardContainer } from './Card'

export default class Tags extends Component {
    render() {
        return (
            <CardContainer className="card">
                <div className="card-header">
                    Tags
                </div>
                <ul className="list-group list-group-flush">
                    <Link to='/' className="">
                        <li className="list-group-item">#PHP (1346)</li>
                    </Link>
                    <Link to='/' className="">
                        <li className="list-group-item">#Java (786)</li>
                    </Link>
                    <Link to='/' className="">
                        <li className="list-group-item">#C++ (314)</li>
                    </Link>
                </ul>
            </CardContainer>
        )
    }
}

