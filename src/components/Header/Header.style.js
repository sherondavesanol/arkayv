import styled from 'styled-components';

export const Wrapper = styled.div`
`

export const HeaderText = styled.h1`
`

export const HighlightedText = styled.span`
    color: var(--secondary);
`

export const StyledImage = styled.img`
    width: 17.5rem;
    height: auto;
    display: block;
    margin: 0 auto;

    @media only screen and (min-width: 768px) {
        width: 35rem;
    }

    @media only screen and (min-width: 1024px) {
        width: 40rem;
    }

    @media only screen and (min-width: 1920px) {
        width: 50rem;
    }
`