import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../componets/SectionTitle";
import {FlexWrapper} from "../../../componets/FlexWraper";
import {Work} from "../../../componets/work/Work";
import {TabMenu} from "./tabMenu/TabMenu";
import socialImg from "../../../assets/img/social.png";
import countdownImg from "../../../assets/img/countdown.png";
import {Container} from "../../../componets/Container";

const worksItems = ["ALL", "LANDING PAGE", "REACT", "SPA"]

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>

                <TabMenu menuItems={worksItems}/>

                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    <Work title={"Social Network"}
                           text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                          src={socialImg}/>
                    <Work title={"Timer"}
                          text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"}
                          src={countdownImg}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>

    );
};

const StyledWorks = styled.section`
    ${FlexWrapper} {
        gap: 30px;
    }
`
