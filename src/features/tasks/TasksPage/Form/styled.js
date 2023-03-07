import styled from "styled-components";

export const FormElement = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 20px;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }   
`;

export const Button = styled.button`
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    padding: 10px;
    border: none;
    transition: 1s;

    &:hover {
        filter: brightness(120%);
        transform: scale(1.1);
    }

    &:active {
        filter: brightness(140%);
    }
`;