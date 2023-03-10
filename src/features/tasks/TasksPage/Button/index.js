import styled from "styled-components";

export const Button = styled.button`
    border: none;
    background-color: transparent;
    margin: 0 0 0 15px;
    color: ${({ theme }) => theme.color.teal};
    transition: color 1s;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-basis: 100%;
        justify-content: center;
        margin: 10px;  
    };

    &:hover {
        filter: brightness(110%);
    }

    &:disabled {
        color: ${({ theme }) => theme.color.silver};
        cursor: not-allowed;
    }

`;