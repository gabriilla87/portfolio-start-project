import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../componets/icon/Icon";
import {SectionTitle} from "../../../componets/SectionTitle";
import {Slider} from "../../../componets/slider/Slider";
import {FlexWrapper} from "../../../componets/FlexWraper";
import {IconWrapper} from "../../../componets/skill/Skill";
import {Container} from "../../../componets/Container";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <IconWrapper>
                        <Icon iconId={"quote"}/>
                    </IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>

        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    ${IconWrapper} {
        margin: 28px 0 72px;
    }
`

