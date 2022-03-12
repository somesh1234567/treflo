import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import Navbar from '../components/Navbar';

export default function Pizza({ pizza }) {
    const [quantity, setQuantity] = useState(1)
    const [show, setShow] = useState(false);
    const [cart, setCart] = useState([])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const Type = () => {
        return (
            <img src="https://img.icons8.com/color/48/000000/non-vegetarian-food-symbol.png"/>
        )
    }
    const addToCart = (pizza) => {
        console.log('we are in cart');
        setCart([...cart, pizza.name]);
    }
    return (
        <div style={{ margin: '70px' }} className="shadow-lg p-3 mb-5 rounded">
            <div onClick={handleShow}>
                <h1>{pizza.name}</h1>
                <img src={pizza.img_url} className="img-fluid" style={{ height: '200px', width: '300px' }} />
            </div>

            <div className="flex-container">
                <div className='w-100 m-1'>
                    <p>{pizza.size[0].title}</p>
                    <select className='form-control'>
                        {pizza.size[0].items.map(v => {
                            return <option key={v.size} value={v.size}>{v.size}</option>
                        })}
                    </select>
                </div>
                <div className='w-100 m-1'>
                    <p>{pizza.toppings[0].title}</p>
                    <select className='form-control'>
                        {pizza.toppings[0].items.map(top => {
                            return <option key={top.name} value={top.name}>{top.name}</option>
                        })}
                    </select>
                </div>
                <div className='w-100 m-1'>
                    <p>Quantity</p>
                    <select className='form-control' value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
                        {[...Array(10).keys()].map((x, i) => {
                            return <option key={i + 1} value={i + 1}>{i + 1}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className="flex-container">
                <div className='m-1 w-100'>
                    <h1 className='mt-1'>Rating:{pizza.rating}</h1>
                </div>
                <div className='m-1 w-100'>
                    <h1 className='mt-1'>Price: {pizza.price * quantity} Rs/-</h1>
                </div>
                <div className='m-1  w-100'>
                    <button className='btn' onClick={() => addToCart(pizza)}>Add To Cart</button>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={pizza.img_url} className="img-fluid" />
                    {pizza.isVeg.toString() === "false" ? <Type /> : <img src="https://img.icons8.com/color/48/000000/vegetarian-food-symbol.png"/>}
                    <h1 className='m-1'>{pizza.description}</h1>
                </Modal.Body>

                <Modal.Footer>
                    <button className='btn' onClick={handleClose}>CLOSE</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
