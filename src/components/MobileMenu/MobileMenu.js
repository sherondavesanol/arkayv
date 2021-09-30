// React
import { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import UserContext from '../../UserContext';

// Style
import { Wrapper, StyledMobileLinks, StyledMobileMenuFooter } from './MobileMenu.style';
import './MobileMenu.css';

export default function MobileMenu(props) {

    const { unsetUser } = useContext(UserContext);

    const logout = () => {
        unsetUser();
        props.closeMobileMenu();
    }

    const handleLoginButtonClick = () => {
        props.closeMobileMenu();
        props.showLoginForm();
    }

    const links = (props.linksArray).map((pathname, index) => {
    
        return pathname === 'cart'
            ? <NavLink onClick={props.closeMobileMenu} className='nav-links-mobile' to={`/${pathname}`} key={index}>{pathname}({props.cartCount})</NavLink>
            : pathname === 'wishlist'
                ? <NavLink onClick={props.closeMobileMenu} className='nav-links-mobile' to={`/${pathname}`} key={index}>{pathname}({props.wishlistCount})</NavLink>
                : pathname === 'login'
                    ? <NavLink to='#' onClick={handleLoginButtonClick} className='nav-links-mobile' key={index}>{pathname}</NavLink>
                    : pathname === 'logout'
                        ? <NavLink to='#' onClick={logout} className='nav-links-mobile' key={index}>{pathname}</NavLink>
                        : <NavLink to={`/${pathname}`} onClick={props.closeMobileMenu} className='nav-links-mobile' key={index}>{pathname}</NavLink>
    });

    return (
        <Wrapper className={props.isActive ? 'nav-menu active' : 'nav-menu'}>
            <StyledMobileLinks>{links}</StyledMobileLinks>
            <StyledMobileMenuFooter>arkayv_ by sherondavesanol</StyledMobileMenuFooter>
        </Wrapper>
    )
}