import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import * as ReactBootStrap from 'react-bootstrap'

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

export default function Homescreen() {
    const [names, setNames] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        fetch(BASE_URL)
            .then(res => res.json())
            .then(data => {
                setNames(data)
                setLoading(true)
            })
    }, [])

    return (
        <div>
            <div className="row">
                {loading ? names.map(name => {
                    return (<div className="col-md-4">
                        <div>
                            <Card card={name} />
                        </div>
                    </div>)
                }) : <div class="text-center">
                    <div class="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>}
            </div>
        </div>
    )
}
