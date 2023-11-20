import React from 'react'
import Home from './components/Home'
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import Checkout from './components/Checkout'
import Login from './components/Login'
import { useStateValue } from './components/StateProvider'
import { auth } from './components/Firebase'

function Header() {
  const [{ basket, user }] = useStateValue()

  const login = () => {
    if (user) {
      auth.signOut()
    }
  }

  return (
    <nav className="header">
      <NavLink exact to="/home">
        <img
          className="header_logo"
          src="https://banner2.cleanpng.com/20180519/jjs/kisspng-e-commerce-logo-electronic-business-5b00d2d0918d84.2335269315267806245962.jpg"
          alt=""
        />
      </NavLink>
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <NavLink exact to={!user && '/login'} className={'header_link'}>
          {user ? (
            <div onClick={login} className="header_option">
              <span className="header_optionLineOne">Hello {user.email}</span>
              <span className="header_optionLineTwo">
                {user ? 'Sign Out' : 'Sign in'}
              </span>
            </div>
          ) : (
            <div onClick={login} className="header_option">
              <span className="header_optionLineTwo">Sign in</span>
            </div>
          )}
        </NavLink>
        <NavLink exact to="/" className={'header_link'}>
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </NavLink>
        <NavLink exact to="/" className={'header_link'}>
          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </NavLink>
        <NavLink exact to="/checkout" className={'header_link'}>
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </NavLink>
      </div>
    </nav>
  )
}

export default Header
