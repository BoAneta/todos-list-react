import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;
    &.active {
        font-weight: bold;
    }
    &:hover {
        border-bottom: 1px solid;
    }
`;

export const StyledUl = styled.ul`
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.teal};
    list-style: none;
    margin: 0;
`;

export const StyledItem = styled.li`
    padding: 20px;
`;