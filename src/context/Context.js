import { useReducer } from 'react'
import { useContext } from 'react'
import {createContext} from 'react'
import { useEffect, useState } from 'react'
import { cartReducer } from './Reducers'

const Cart = createContext()

const Context = ({children}) => {
  const BASE_URL = 'https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68'
  //const [names, setNames] = useState([])
  const names = []
  useEffect(() => {
      fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
          names.push(data)
      })
  },[])
  const [state,dispatch] = useReducer(cartReducer, {
    names : names,
    cart:[]
  });
  return (
    <Cart.Provider value={{state,dispatch}}>{children}</Cart.Provider>
  )
}

export default Context

export const CartState = () => {
  return useContext(Cart);
};