// React
import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom';
import UserContext from '../../UserContext';

// Style
import { Wrapper, StyledNavbar, StyledHomeLink, StyledNavLinks, StyledIcon } from './Navbar.style';

// Components
import MobileMenu from '../MobileMenu/MobileMenu';
import LoginForm from '../LoginForm/LoginForm';

export default function Navbar(props) {

    const {user, unsetUser} = useContext(UserContext);

    const [mobileMenu, setMobileMenu] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);

    const toggleMobileMenu = () => setMobileMenu(!mobileMenu);
    const closeMobileMenu = () => setMobileMenu(false);
    const handleClose = () => setShowLoginForm(false);
    const handleShow = () => setShowLoginForm(true);

    const linksArray = user.id === null
        ? ['shop', 'login']
        : user.isAdmin === true
            ? ['products', 'users', 'orders', 'logout']
            : ['shop', 'cart', 'wishlist', 'profile', 'logout'] 

    const links = linksArray.map((pathname, index) => {
    
        return pathname === 'cart'
            ? <NavLink to={`/${pathname}`} key={index}>{pathname}({props.cartCount})</NavLink>
            :  pathname === 'wishlist'
                ? <NavLink to={`/${pathname}`} key={index}>{pathname}({props.wishlistCount})</NavLink>
                :  pathname === 'login'
                    ? <NavLink to='#' onClick={handleShow} key={index}>{pathname}</NavLink>
                    : pathname === 'logout'
                        ? <NavLink to='/' onClick={unsetUser} key={index}>{pathname}</NavLink>
                        : <NavLink to={`/${pathname}`} key={index}>{pathname}</NavLink>
    });

    const mobileMenuIcon = mobileMenu ? 'fas fa-times' : 'fas fa-bars';

    return(
        <StyledNavbar>
            <MobileMenu 
                linksArray={linksArray} 
                cartCount={props.cartCount} 
                wishlistCount={props.wishlistCount} 
                isActive={mobileMenu}
                closeMobileMenu={closeMobileMenu}
                showLoginForm={handleShow}
            />
            <LoginForm 
                show={showLoginForm}
                handleClose={handleClose}
            />
            <Wrapper>
                <StyledHomeLink onClick={closeMobileMenu}><NavLink to='/'>ARKAYV®</NavLink></StyledHomeLink>
                <StyledIcon className={mobileMenuIcon} onClick={toggleMobileMenu}></StyledIcon>
                <StyledNavLinks>{links}</StyledNavLinks>
            </Wrapper>
        </StyledNavbar>
    )
}