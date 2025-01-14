import styled, { css } from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    color: #000;
    text-decoration-line: none;

    &:hover {
        background-color: #00000055;
    };
`;

const activeClassName = "active";
export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    margin: 20px;
    color: #00000055;
    text-decoration-line: none;
    
    &.${activeClassName} {
        color: #000;
    };

    &:hover {
        background-color: #fff;
    };
`;

export const StyledH1 = styled.h1`
    max-width: 100%;
    text-align: center;
`;

export const StyledSection = styled.section`
    background-color: #fff;
    max-width: 1000px;
    min-height: 130px;
    margin: 0 auto;
    margin-bottom: 15px;
    padding-bottom: 15px;
`;

export const StyledDiv = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    border-bottom: 2px solid #aaa;

    @media (max-width: 470px) {
        display: flex;
        flex-flow: column nowrap;
        align-items: stretch;
        border-bottom: 2px solid #aaa;
    };
`;

export const StyledH2 = styled.h2`
    flex: 1 1 auto;
    font-size: 20px;
    margin: 0;
    padding: 10px;
`;

export const StyledForm = styled.form`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    @media (max-width: 380px) {
        display: flex;
        flex-flow: column nowrap;
        align-items: stretch;
    }  
`;

export const StyledInput = styled.input`
    padding: 5px;
    margin: 10px;
    width: 98%;

    ${({ $add }) => $add && css`
        flex: 1 1 auto;
    `}
`;

export const StyledButton = styled.button`
    flex: 0 0 auto;
    color: #fff;
    background-color: hsl(180, 100%, 30%);
    border-style: none;
    margin: 10px;
    padding: 6px;
    transition: 1s;

    &:hover {
        background-color: hsl(180, 100%, 40%);
        transform: scale(1.1);
    };

    ${({ $header }) => $header && css`
        color: hsl(180, 100%, 30%);
        background-color: #fff;
        padding: 0px;
        transition: 1s;

    &:hover {
        color: hsl(180, 100%, 50%);
        background-color: #fff;
        transform: scale(1.1);
    }

    &:disabled {
        color: #aaa;
    }
    `};
    
    ${({ $done }) => $done && css`
        background-color: hsl(120, 100%, 30%);
        border-style: none;
        min-width: 27px;
        min-height: 27px;
        transition: 1s;

    &:hover {
        background-color: hsl(120, 100%, 60%);
        transform: scale(1.1);
    }
    `};

    ${({ $delete }) => $delete && css`
        background-color: hsl(0, 100%, 60%);
        border-style: none;
        min-width: 27px;
        min-height: 27px;
        transition: 1s;

    &:hover {
        background-color: hsl(0, 100%, 70%);
        transform: scale(1.1);
    }
    `};
`;

export const StyledUl = styled.ul`
    list-style-type: none;
    margin: 0px;
    padding-left: 0px;

    ${({ $pages }) => $pages && css`
        background-color: hsl(180, 100%, 30%);
        padding: 0px;
        border: 1px solid black;
        border-radius: 10%;
        font-size: 25px;
        display:flex;
        flex-flow: row nowrap;
        justify-content:center;
    `};
`;

export const StyledLi = styled.li`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    border-bottom: 1px solid #aaa;

    ${({ hidden }) => hidden && css`
        display: none;
    `}

    @media(max-width: 250px) {
        flex-flow: column nowrap;
        align-items: center;
    };
`;

export const StyledSpan = styled.span`
    flex: 1 1 auto;
    padding: 5px;
    margin: 10px;
    
    ${({ $done }) => $done && css`
        flex: 1 1 auto;
        padding: 5px;
        margin: 10px;    
        text-decoration: line-through;
    `}
`;