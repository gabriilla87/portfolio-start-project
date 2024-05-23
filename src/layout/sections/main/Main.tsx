import React from 'react';
import {FlexWrapper} from "../../../componets/FlexWraper";
import styled from "styled-components";
import portrait from "../../../assets/img/portrait.jpeg";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper justify="space-around" align="center">
                <div>
                    <span>Hi There</span>
                    <h2>I am Vlad Kazyutchiz</h2>
                    <h1>A Web Developer.</h1>
                </div>

                <Photo src={portrait} alt="It's me!!!"/>

            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #fff5e7;
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`