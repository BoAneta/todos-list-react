import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin-block-start: 35px;
    margin-block-end: 25px;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 10px;
    padding: 10px 0;
    border-bottom: 1px solid ${({theme}) => theme.color.alto};

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    display: flex;
    align-items: center;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    width: 30px;
    height: 30px;
    background-color: ${({ theme }) => theme.color.forestGreen};
    border-style: none;

    ${({ remove }) => remove && css`
        background-color: ${({ theme }) => theme.color.crimson};
        color: ${({ theme }) => theme.color.white};
        transition: 1s;

        &:hover {
            filter: brightness(120%);
        }

        &:active {
            filter: brightness(140%);
        }
    `}

    ${({ done }) => done && css`
        color: ${({ theme }) => theme.color.white};
        transition: 1s;

        &:hover {
            filter: brightness(120%);
        }

        &:active {
            filter: brightness(140%);
        }
    `}
`;