import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import Navbar from './Navbar';
import Cartscreen from '../screens/Cartscreen';

export default function Card({ card }) {
    const [quantity, setQuantity] = useState(1)
    const [show, setShow] = useState(false);
    const [cart, setCart] = useState([])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div style={{ margin: '70px' }} className="shadow-lg p-3 mb-5 rounded">
            <div className="flex-container">
                <div className='w-40 m-1'>
                    <p><img src="https://images.unsplash.com/photo-1653643629247-bc811b063aac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className="img-fluid" style={{ height: '200px', width: '300px' }} /></p>
                </div>
            </div>
            <div className="flex-container">
                <div className='w-40 m-1'>
                    <p>USERID: {card.userId}</p>
                </div>
            </div>
            <div className="flex-container">
                <div className='w-40 m-1'>
                    <p>ID: {card.id}</p>
                </div>
            </div>
            <div className="flex-container">
                <div className='w-40 m-1'>
                    <p>TITLE: {card.title}</p>
                </div>
            </div>
            <div className="flex-container">
                <div className='w-40 m-1'>
                    <p>DESCRIPTION: {card.body}</p>
                </div>
            </div>
        </div>
    )
}
