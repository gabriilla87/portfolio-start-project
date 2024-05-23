import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../componets/SectionTitle";
import {FlexWrapper} from "../../../componets/FlexWraper";
import {Work} from "../../../componets/work/Work";
import {Menu} from "../../../componets/menu/Menu";
import socialImg from "../../../assets/img/social.png";
import countdownImg from "../../../assets/img/countdown.png";

const worksItems = ["ALL", "LANDING PAGE", "REACT", "SPA"]

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>

            <Menu menuItems={worksItems}/>

            <FlexWrapper justify={"space-around"}>
                <Work title={"Social Network"}
                      text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                      src={socialImg}/>
                <Work title={"Timer"}
                      text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"}
                      src={countdownImg}/>
            </FlexWrapper>
        </StyledWorks>

    );
};

const StyledWorks = styled.section`
    height: 100vh;
    background-color: #fff1a1;
`
