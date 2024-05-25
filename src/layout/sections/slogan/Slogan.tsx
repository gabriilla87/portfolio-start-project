import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../componets/SectionTitle";
import {Button} from "../../../componets/button/Button";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <SectionTitle>I Am Available For Freelance</SectionTitle>
            <Button>HIRE ME</Button>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
    background-color: #ffb4b4;
    margin: 0 auto;
    text-align: center;
    min-height: 30vh;
`