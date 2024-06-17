import React from 'react';
import {FlexWrapper} from "../../../componets/FlexWraper";
import styled from "styled-components";
import portrait from "../../../assets/img/portrait.jpeg";
import {Container} from "../../../componets/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify="space-around" align="center" wrap={"wrap"}>
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
    display: flex;
    min-height: 100vh;
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

        @media ${theme.media.mobile} {
            width: 314px;
            height: 414px;
            top: -20px;
            left: 17px;
        }
    }
    
    @media ${theme.media.mobile} {
        margin-top: 65px;
    }
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
    margin-right: 20px;
    
    @media ${theme.media.mobile} {
        width: 310px;
        height: 380px;
    }
`

const Name = styled.h2`
    ${font({family: '"Josefin Sans", sans-serif', weight: 700, Fmax: 50, Fmin: 36})}
    letter-spacing: 0.05em;
    margin: 10px 0;
    
    span {
        position: relative;
        z-index: 0;
        white-space: nowrap;
        
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
    
    @media ${theme.media.mobile} {
        margin: 15px 0 22px;
    }
`

const SmallText = styled.span`
    font-size: 14px;
    font-weight: 400;
`

const MainTitle = styled.h1`
    ${font({weight: 400, Fmax: 27, Fmin: 20})}
`