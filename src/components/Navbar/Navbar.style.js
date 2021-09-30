import styled from 'styled-components';

export const StyledNavbar = styled.nav`
    background-color: var(--white);
    padding: 1rem;
    position: fixed;
    z-index: 99;
    width: 100%;
    top: 0;
    left: 0;

    @media only screen and (min-width: 1024px) {
        padding: 1rem 3rem;
    }
`

export const StyledIcon = styled.i`
    
    @media only screen and (min-width: 1024px) {
        display: none;
    }
`

export const Wrapper = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
`

export const StyledHomeLink = styled.div`

    font-family: 'Inter', 'Arial', sans-serif;
    font-weight: 800;
`

export const StyledNavLinks = styled.div`

    display: none;
    justify-content: space-between;
    font-family: 'Roboto', 'Arial', sans-serif;
    text-transform: uppercase;
    font-size: 0.85rem;

    a:not(:last-child) {
        margin-right: 1rem;
    }

    @media only screen and (min-width: 1024px) {
        display: initial;
    }
`