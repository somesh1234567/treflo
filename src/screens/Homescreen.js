import React, { useState, useEffect } from 'react'
import Pizza from '../components/Pizza'
import { CartState } from '../context/Context'
import * as ReactBootStrap from 'react-bootstrap'

const BASE_URL = 'https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68'

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
                            <Pizza pizza={name} />
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
