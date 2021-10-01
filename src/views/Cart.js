import { useEffect } from "react";

// Components
import ArtistsCarousel from "../components/ArtistsCarousel/ArtistsCarousel";

// API
import { VIEW_CART_URL, defaultOptions } from '../API';

export default function Cart() {
    
    useEffect(() => window.scrollTo(0, 0), []);

    const fetchCartData = () => {

        fetch(VIEW_CART_URL, defaultOptions)
            .then(data => data.json())
            .then(data => console.log(data));
    }

    fetchCartData();
    
    return (
        <>
            <ArtistsCarousel />
        </>
    )
}