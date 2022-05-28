import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({b}) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary shadow-lg p-3 mb-5 bg-secondary rounded">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white" to="/">VMENTOR</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/cart">Form</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
