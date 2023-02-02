import styled from "styled-components";

export const Tasks = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const TasksButtons = styled.button`
    border: none;
    background-color: transparent;
    margin: 0 0 0 15px;
    color: #008080;
    transition: color 1s;

    @media(max-width: 767px) {
        flex-basis: 100%;
        justify-content: center;
        margin: 10px;  
    };

    &:hover {
        color: #03d3d3;
    }

    &:disabled {
        color: #ccc;
        cursor: not-allowed;
    }

`;