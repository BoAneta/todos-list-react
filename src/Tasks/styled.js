import styled, {css} from "styled-components";

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
    padding: 10px;
    margin: 0 20px;
    border-bottom: 1px solid #dddddd;

    ${({hidden}) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    display: flex;
    align-items: center;

    ${({done}) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    width: 30px;
    height: 30px;
    background-color: #008000;
    border-style: none;

    ${({remove}) => remove && css`
        background-color: #d60c0c;
        color: #ffffff;
        transition: 1s;

        &:hover {
            background-color: #f02f2f;
        }

        &:active {
            background-color: #ff3838;
        }
    `}

    ${({done}) => done && css`
        color: #eee;
        transition: 1s;

        &:hover {
            background-color: #0ca70c;
        }

        &:active {
            background-color: #25d125;
        }
    `}
`;