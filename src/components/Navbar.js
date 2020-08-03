import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
import {ButtonContainer} from './Button'
import styled from 'styled-components'

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} style={{width: "3rem", height: "3rem"}} alt="store" className="navbar-brand"/>
        </Link>

        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
             <Link to="/" className="nav-link">
              vehicles
             </Link>
          </li>
        </ul>

        <Link className="ml-auto" to="/cart">
            <ButtonContainer>
              <div className="navBarButton">
              <span className="mr-2">
                <i className="fas fa-cart-plus"></i>
              </span>
              shopping cart
              </div>
            </ButtonContainer> 
        </Link>
      </NavWrapper>
    )
  }
}


const NavWrapper = styled.nav`
    background: var(--mainGrey) !important;
    .nav-link {
      color: var(--mainWhite) !important;
      font-size: 1.5rem;
      text-transform: capitalize;
    }
    .navBarButton{
      color: var(--mainWhite);
    }
`