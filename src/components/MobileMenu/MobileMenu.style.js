import styled from 'styled-components';

export const Wrapper = styled.div`

    @media only screen and (min-width: 1024px) {
            display: none;
        }
`

export const StyledMobileLinks = styled.div`

    font-family: 'Roboto', 'Arial', sans-serif;
    text-transform: uppercase;
    font-size: 0.85rem;
    transition: 300ms ease-in-out;

    a {
        display: flex;
        justify-content: center;
    }
`
export const StyledMobileMenuFooter = styled.p`

    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 0.85rem;
    color: var(--lightGrey);
    position: relative;
    margin-top: auto;
    margin-bottom: 2rem;
    text-align: center;
`