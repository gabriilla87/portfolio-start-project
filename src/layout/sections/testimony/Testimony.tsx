import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../componets/icon/Icon";
import {SectionTitle} from "../../../componets/SectionTitle";
import {Slider} from "../../../componets/slider/Slider";
import {FlexWrapper} from "../../../componets/FlexWrapper";
import {Container} from "../../../componets/Container";
import {S} from "../skills/Skills_Styles";

export const Testimony: React.FC = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <S.IconWrapper>
                        <Icon iconId={"quote"}/>
                    </S.IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>

        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    ${S.IconWrapper} {
        margin: 28px 0 72px;
    }
`

