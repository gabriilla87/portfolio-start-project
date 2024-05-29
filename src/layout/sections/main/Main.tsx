import React from 'react';
import {FlexWrapper} from "../../../componets/FlexWraper";
import styled from "styled-components";
import portrait from "../../../assets/img/portrait.jpeg";
import {Container} from "../../../componets/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    <div>
                        <SmallText>Hi There</SmallText>
                        <Name>I am <span>Vlad Kazyutchiz</span></Name>
                        <MainTitle>A Web Developer.</MainTitle>
                    </div>

                    <PhotoWrapper>
                        <Photo src={portrait} alt="It's me!!!"/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #fff5e7;
    display: flex;
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    
    &::before{
        content: "";
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.colors.accent};
        background-color: transparent;

        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;
    }
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`

const Name = styled.h2`
    font-family: "Josefin Sans", sans-serif;
    font-size: 50px;
    font-weight: 700;
    letter-spacing: 0.05em;
    margin: 10px 0;
    position: relative;
    
    span {
        position: relative;
        z-index: 0;
        
        &::before{
            display: inline-block;
            content: "";
            width: 100%;
            height: 20px;
            z-index: -1;
            background-color: ${theme.colors.accent};

            position: absolute;
            bottom: 0;
            
        }
    }
`

const SmallText = styled.span`
    font-size: 14px;
    font-weight: 400;
`

const MainTitle = styled.h1`
    font-size: 27px;
    font-weight: 400;
`