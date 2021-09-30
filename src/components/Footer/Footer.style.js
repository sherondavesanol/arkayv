import styled from "styled-components";

export const Wrapper = styled.div`
`

export const StyledText = styled.p`
    font-size: 0.85rem;

    @media only screen and (min-width: 768px) {
        font-size: 0.7rem;
    }
`

export const StyledIcon = styled.i`
    font-size: 1.75rem;
    margin: 0 0.5rem;
    transition: 300ms ease-in-out;

    &:hover {
        color: var(--secondary);
    }

    @media only screen and (min-width: 768px) {
        font-size: 1.35rem;
    }
`

export const StyledLink = styled.a`
    font-size: 0.85rem;
    color: var(--medGrey);

    @media only screen and (min-width: 768px) {
        font-size: 0.7rem;
    }
`