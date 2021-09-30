import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --white: #fff;
        --lightGrey: rgba(0, 0, 0, 0.25);
        --medGrey: rgba(0, 0, 0, 0.5);
        --darkGrey: rgba(0, 0, 0, 0.75);
        --secondary: rgba(255, 0, 0, 0.75);
        --fontXLarge: 2.5rem;
        --fontLarge: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
    }

    * {
        box-sizing: border-box;
        color: var(--medGrey);
    }

    body {
        padding-top: 56px;
        margin: 0 1rem;

        @media only screen and (min-width: 768px) {
            margin: 1rem 2rem;
        }

        @media only screen and (min-width: 1024px) {
            margin: 1rem 5rem;
        }

        @media only screen and (min-width: 1440px) {
            margin: 1rem 10rem;
        }

        @media only screen and (min-width: 1920px) {
            margin: 1rem 15rem;
        }

        h1 {
            font-size: 1.75rem;
            font-weight: 700;
            text-align: center;
            font-family: 'Inter', 'Arial', sans-serif;

            @media only screen and (min-width: 768px) {
                font-size: 3.5rem;
            }

            @media only screen and (min-width: 1024px) {
                font-size: 4.5rem;
            }

            @media only screen and (min-width: 1920px) {
                font-size: 5.5rem;
            }
        }

        h2 {
            font-size: 1.5rem;
            font-weight: 600;
            font-family: 'Roboto', 'Arial', sans-serif;
        }

        h3 {
            font-size: 1.1rem;
            font-weight: 600;
            font-family: 'Roboto', 'Arial', sans-serif;
        }

        p {
            font-size: 1rem;
            color: var(--medGrey);
            font-family: 'Roboto', 'Arial', sans-serif;
        }

        a {
            color: var(--darkGrey);
            transition: 300ms ease-in-out;
            
            &:hover {
                color: var(--secondary);
                text-decoration: none;
            }
        }

        .secondary {
            color: var(--secondary);
        }

        .lightGrey {
            color: var(--lightGrey);
        }

    }
`;