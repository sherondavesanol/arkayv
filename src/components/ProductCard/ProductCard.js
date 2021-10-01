// React
import { useContext, useState } from 'react';
import UserContext from '../../UserContext';

// Style
import { Wrapper, ProductDetails, ProductName, ProductPrice, ProductArtist, StyledIcon } from "./ProductCardStyle";

// Components
import LoginForm from '../LoginForm/LoginForm';

import { VIEW_CART_URL, VIEW_WISHLIST_URL, defaultOptions  } from '../../API';

export default function ProductCard(props) {

    const token = localStorage.getItem('token');

    const {user} = useContext(UserContext);
    const [showLoginForm, setShowLoginForm] = useState(false);

    
    const addToCart = () => {

        fetch('https://arkayv-api.herokuapp.com/api/orders/check-cart-items', 
        {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                productId: props.productId
            })
        })
        .then(data => data.json())
        .then(data => {

            if (data === false) {

            fetch('https://arkayv-api.herokuapp.com/api/orders/add-to-cart', 
            {
                method: 'POST',
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    productId: props.productId,
                    addedOn: Date()
                })
            })
            .then(data => data.json())
            .then(data => data 
                ? alert('added to cart')
                : alert ('fail'))

            } else {

                alert('Item is already added to cart.')
            };
        });
    };

    const addToWishlist = () => {

        fetch('https://arkayv-api.herokuapp.com/api/orders/check-wishlist-items', 
        {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                productId: props.productId
            })
        })
        .then(data => data.json())
        .then(data => {

            if (data === false) {

            fetch('https://arkayv-api.herokuapp.com/api/orders/add-to-wishlist', 
            {
                method: 'POST',
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    productId: props.productId,
                    addedOn: Date()
                })
            })
            .then(data => data.json())
            .then(data => data 
                ? alert('added to wishlist')
                : alert ('fail'))

            } else {

                alert('Item is already added to wishlist.')
            };
        });
    };

    const handleClose = () => setShowLoginForm(false);
    const handleAddToCart = () => user.id ? addToCart() : setShowLoginForm(true);
    const handleAddtoWishlist = () => user.id ? addToWishlist() : setShowLoginForm(true);

    const price = (props.price).toFixed(2);

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