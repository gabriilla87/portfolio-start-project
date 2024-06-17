import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../componets/SectionTitle";
import {Button} from "../../../componets/button/Button";
import {Container} from "../../../componets/Container";
import {FlexWrapper} from "../../../componets/FlexWraper";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <SectionTitle>I Am Available For Freelance</SectionTitle>
                    <Button>HIRE ME</Button>
                </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`

`