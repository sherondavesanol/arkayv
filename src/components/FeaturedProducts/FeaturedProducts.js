// React
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Style
import { Wrapper, StyledPseudoLink, StyledSectionTitle, Products } from "./FeaturedProducts.style";

// Components
import ProductCard from "../ProductCard/ProductCard";

// API
import { GET_ACTIVE_PRODUCTS_URL } from '../../API';

export default function FeaturedProducts(props) {

    const [productsArray, setProductsArray] = useState([]);

    const productsArrayDuplicate = productsArray.map(product => product);

    const fetchActiveProducts = () => {

        fetch(GET_ACTIVE_PRODUCTS_URL)
        .then(data => data.json())
        .then(data => {

            setProductsArray(data);
        });
    };

    const randomizeArray = (array) => {

        for (let i = array.length-1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        };

        return array;
    };

    const randomizedProductsArray = randomizeArray(productsArrayDuplicate);

    const products = props.random ? randomizedProductsArray : productsArray;
    const displayedProductsSize = props.items ? products.slice(0, props.items) : products;

    const displayProducts = displayedProductsSize.map((product, index) => {
    
        return <ProductCard 
                key={index}
                name={product.name}
                price={product.price}
                artist={product.artist}
                image={`https://arkayv-api.herokuapp.com/${product.image}`}
                />
    });
    
    useEffect(() => {
        fetchActiveProducts();
    }, []);

    return(
        <Wrapper className='my-5'>
            <StyledSectionTitle>{props.title}</StyledSectionTitle>
            <p className='mt-3'>{props.subtitle}</p>
            <Products className='my-3'>
                {displayProducts}
            </Products>
            <Link to='/shop'>
                <StyledPseudoLink>{props.link}</StyledPseudoLink>
            </Link>
        </Wrapper>
    )
}