import styled from 'styled-components';

export const StyledButton = styled.button`

    font-size: 0.85rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    background-color: ${props => props.status === "danger" ? 'var(--secondary)' : 'rgba(0, 175, 0, 1)'};
    color: var(--white);
    width: 80%;
    border-radius: 12px;
    border: none;

    &:hover {
        background-color: ${props => props.status === "danger" ? 'rgba(210, 0, 0, 0.9)' : 'rgba(0, 150, 0, 1)'};
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
    background-color: rgba(0, 0, 255, 0.75);
    color: var(--white);
    width: 80%;
    border-radius: 12px;
    border: none;

    &:hover {
    background-color: rgba(0, 0, 200, 0.9);
        cursor: pointer;
    }
`