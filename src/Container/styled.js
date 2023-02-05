import styled from "styled-components";

export const MainContainer = styled.div`
    max-width: 900px;
    margin: auto;
    margin-top: 30px;
    padding: 20px;

  
    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        margin: 20px;
    }
`;