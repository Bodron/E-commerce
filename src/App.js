import React, { useEffect } from 'react'
import Header from './Header'
import Home from './components/Home'
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom'
import Checkout from './components/Checkout'
import Login from './components/Login'
import { useStateValue } from './components/StateProvider'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

function App() {
  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {
    const auth = getAuth()
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
    return () => {
      unsubscribe()
    }
  }, [])
  console.log('user is', user)

  return (
    <BrowserRouter>
      <Routes path="/">
        <Route path="/checkout" exact element={<Checkout />}></Route>
        <Route path="/login" exact element={<Login />}></Route>
        <Route path="/home" exact element={<Home />}></Route>
        <Route path="/" exact element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
