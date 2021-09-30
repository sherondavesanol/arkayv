// React
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Style
import { Wrapper, StyledPseudoLink, StyledSectionTitle, Products } from "./FeaturedProducts.style";

// Components
import ProductCard from "../ProductCard/ProductCard";
import { ProductLoader } from '../ContentLoader/ProductLoader';

// API
import { GET_ACTIVE_PRODUCTS_URL } from '../../API';

export default function FeaturedProducts(props) {

    const [productsArray, setProductsArray] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const productsArrayDuplicate = productsArray.map(product => product);

    const fetchActiveProducts = () => {

        setIsLoading(true);

        fetch(GET_ACTIVE_PRODUCTS_URL)
        .then(data => data.json())
        .then(data => {

            setIsLoading(false);
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

    const displayProducts = isLoading
                                ?
                                    <div>
                                        <ProductLoader className="col-6 col-md-4" />
                                        <ProductLoader className="col-6 col-md-4" />
                                        <ProductLoader className="col-6 col-md-4" />
                                        <ProductLoader className="col-6 col-md-4" />
                                        <ProductLoader className="col-6 col-md-4" />
                                        <ProductLoader className="col-6 col-md-4" />
                                    </div>
                                :
                                    displayedProductsSize.map((product, index) => {
                                    
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
            <Link to='/shop' className="d-block col-4 col-md-2 mx-auto">
                <StyledPseudoLink>{props.link}</StyledPseudoLink>
            </Link>
        </Wrapper>
    )
}