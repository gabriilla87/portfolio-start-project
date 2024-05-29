import React from 'react';
import styled from "styled-components";
import {Logo} from "../../componets/logo/Logo";
import {Container} from "../../componets/Container";
import {FlexWrapper} from "../../componets/FlexWraper";
import {HeaderMenu} from "./HeaderMenu";

const items = ["Home", "Skills", "Works", "Testimony", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.div`
    background: rgba(31, 31, 32, 0.9);
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
`