import styled from 'styled-components';

export const StyledButton = styled.button`

    font-size: 0.85rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    background-color: var(--secondary);
    color: var(--white);
    width: 49%;
    border: none;

    &:hover {
        background-color: rgba(200, 0, 0, 1);
        cursor: pointer;
    }

    &:disabled {
        background-color: rgba(0, 0, 0, 0.3);
    }
`

export const StyledSecondaryButton = styled.button`

    font-size: 0.85rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    background-color: var(--darkGrey);
    color: var(--white);
    width: 49%;
    border: none;

    &:hover {
        background-color: rgba(0, 0, 0, 0.8);
        cursor: pointer;
    }
`

export const StyledInput = styled.input`
    outline: none;
    font-size: 0.9rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: var(--darkGrey);
    border: 1px solid var(--lightGrey);
    padding: 0.5rem;
    width: 100%;

    &:focus {
        border: 2px solid var(--medGrey);
    }
`

export const StyledGuide = styled.p `

    font-size: 0.85rem;
    text-align: center;
    margin: 0;
`

export const StyledToggler = styled.span`

    font-size: 0.85rem;
    color: var(--darkGrey);

    &:hover {
        cursor: pointer;
        color: var(--secondary);
    };
`