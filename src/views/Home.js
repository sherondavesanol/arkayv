import { useEffect } from "react";

import Header from "../components/Header/Header";
import headerImage from '../assets/header-image.jpg';
import ArtistsCarousel from "../components/ArtistsCarousel/ArtistsCarousel";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import LoginForm from "../components/LoginForm/LoginForm";

export default function Home() {
    
    useEffect(() => window.scrollTo(0, 0), []);
    
    return (
        <>
            <LoginForm />
            <Header 
                textStart='Your go-to marketplace for'
                highlightedText='designer toys'
                textEnd='& pieces.'
                headerImage={headerImage}
            />
            <ArtistsCarousel />
            <FeaturedProducts 
                title='Available Products'
                subtitle='Products displayed are randomized. Click the Home link or refresh the page for a new set of products.'
                link='View All'
                items='6'
                random
            />
        </>
    )
}