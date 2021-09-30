import Carousel from 'react-bootstrap/Carousel'

import { artists } from '../MockData/artists';

import { ArtistDescription, ArtistName, StyledIcon, Wrapper } from './ArtistsCarousel.style'

export default function ArtistsCarousel() {

    const prevIcon = <StyledIcon className='fas fa-caret-left'></StyledIcon>
    const nextIcon = <StyledIcon className='fas fa-caret-right'></StyledIcon>

    const carouselItem = artists.map((artist, index) => {

        return(
            <Carousel.Item key={index} >
                <ArtistName className='secondary'>{artist.name}</ArtistName>
                <ArtistDescription className='mt-3 mx-auto'>{artist.description}</ArtistDescription>
            </Carousel.Item>
        )
    })

    return(
        <Wrapper className='my-5'>
            <Carousel nextIcon={nextIcon} prevIcon={prevIcon} indicators={false} interval={99999999999}>
                {carouselItem}
            </Carousel>
        </Wrapper>
    )
}