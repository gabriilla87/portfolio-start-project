import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../componets/icon/Icon";
import {SectionTitle} from "../../../componets/SectionTitle";
import {Slider} from "../../../componets/slider/Slider";
import {FlexWrapper} from "../../../componets/FlexWraper";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={"column"} align={"center"}>
                <Icon iconId={"quote"}/>
                <Slider/>
            </FlexWrapper>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    min-height: 50vh;
    background-color: #aeb9ff;
`
