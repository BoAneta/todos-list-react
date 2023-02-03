import styled from "styled-components";

export const MainSection = styled.section`
    background-color: #ffffff;
    box-shadow: 0 0 5px #ccc;
    word-break: break-word;
    padding: 0 0 1px 0;
`;

export const Header = styled.header`
    border-bottom: 1px solid #ddd;
    padding: 0 20px;
    margin-block-start: 10px;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;

    @media (max-width: 767px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        flex-direction: column;
    }
`;