import React from 'react';
import {FlexWrapper} from "../../../componets/FlexWraper";
import styled from "styled-components";
import {Skill} from "../../../componets/skill/Skill";
import {SectionTitle} from "../../../componets/SectionTitle";


export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>

            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Skill iconId={"html5"}
                       title={"HTML5"}
                       text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                <Skill iconId={"css3"}
                       title={"CSS3"}
                       text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                <Skill iconId={"react"}
                       title={"REACT"}
                       text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                <Skill iconId={"typescript"}
                       title={"TYPESCRIPT"}
                       text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                <Skill iconId={"components"}
                       title={"STYLED COMPONENTS"}
                       text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                <Skill iconId={"figma"}
                       title={"WEB DESIGN"}
                       text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: #ffe5e4;
    min-height: 100vh;
`


