import React from 'react';
import styled from "styled-components";
import {Logo} from "../../componets/logo/Logo";
import {Menu} from "../../componets/menu/Menu";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
        </StyledHeader>
    );
};

const StyledHeader = styled.div`
    display: flex;
    background-color: #d4ffd3;
    justify-content: space-between;
`