import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const ProductDetails = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const ProductName = styled.p`
    color: var(--darkGrey);
    font-weight: 600;
    text-align: start;
    margin: 0;
    padding: 0;
`

export const ProductPrice = styled.p`
    color: var(--darkGrey);
    text-align: start;
    margin: 0;
    padding: 0;
`

export const ProductArtist = styled.p`
    color: var(--lightGrey);
    text-align: start;
    margin: 0;
    padding: 0;
`
export const StyledIcon = styled.i`
    font-size: 1rem;
    color: var(--darkGrey);
    transition: 200ms ease-in-out;
    padding: 0.5rem;
    margin: 0.25rem 1rem 0 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 50%;

    &:hover {
        cursor: pointer;
        color: var(--secondary);
        background-color: rgba(255, 0, 0, 0.1);
    }
`