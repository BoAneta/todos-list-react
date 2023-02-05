import styled from "styled-components";

export const MainSection = styled.section`
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0 0 5px ${({theme}) => theme.color.silver};
    word-break: break-word;
    padding: 0 0 1px 0;
`;

export const Header = styled.header`
    border-bottom: 1px solid ${({theme}) => theme.color.alto};
    padding: 0 20px;
    margin-block-start: 10px;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        flex-direction: column;
    }
`;