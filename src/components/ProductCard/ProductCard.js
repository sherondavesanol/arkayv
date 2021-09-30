// React
import { useContext, useState } from 'react';
import UserContext from '../../UserContext';

// Style
import { Wrapper, ProductDetails, ProductName, ProductPrice, ProductArtist, StyledIcon } from "./ProductCardStyle";

// Components
import LoginForm from '../LoginForm/LoginForm';

export default function ProductCard(props) {

    const {user} = useContext(UserContext);
    const [showLoginForm, setShowLoginForm] = useState(false);

    const handleClose = () => setShowLoginForm(false);
    const handleAddToCart = () => user.id ? console.log('ADDED TO CART') : setShowLoginForm(true);
    const handleAddtoWishlist = () => user.id ? console.log('ADDED TO WISHLIST') : setShowLoginForm(true);

    const price = (props.price).toFixed(2);
    // const name = (props.name).length > 18 ? (props.name).substring(0, 17) + '...' : props.name;

    return(
        <Wrapper className='my-3 col-6 col-md-4'>
            <a href='/'><img src={props.image} width='100%' alt="" /></a>
            <ProductDetails>
                <ProductName className='col-12 col-lg-8'>{props.name}</ProductName>
                <ProductPrice className='col-12 col-lg-4 text-lg-right'>{price} USD</ProductPrice>
                <ProductArtist className='col-12'>{props.artist}</ProductArtist>
                <StyledIcon className="fas fa-shopping-cart" onClick={handleAddToCart}></StyledIcon>
                <StyledIcon className="fas fa-heart" onClick={handleAddtoWishlist}></StyledIcon>
                <LoginForm 
                    show={showLoginForm}
                    handleClose={handleClose}
                />
            </ProductDetails>
        </Wrapper>
    )
}