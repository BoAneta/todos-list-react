import styled from "styled-components";

export const FormElement = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    padding: 20px;
    gap: 20px;

@media (max-width: 767px) {
        grid-template-columns: 1fr;
    }   
`;

export const Input = styled.input`
    padding: 5px;
    border: 2px solid #eeeeee;
`;

export const Button = styled.button`
    background-color: #008080;
    color: #ffffff;
    padding: 10px;
    border: none;
    transition: 1s;

    &:hover {
        background-color: #009999;
        transform: scale(1.1);
    }

    &:active {
        background-color: #008080;
    }
`;