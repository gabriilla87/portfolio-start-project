import React from 'react';
import {FlexWrapper} from "../../../componets/FlexWrapper";
import {Skill} from "./skill/Skill";
import {SectionTitle} from "../../../componets/SectionTitle";
import {Container} from "../../../componets/Container";
import {S} from "./Skills_Styles";

const skillData = [
    {
        iconId: "html5",
        title: "HTML5",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "css3",
        title: "CSS3",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "react",
        title: "REACT",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "typescript",
        title: "TYPESCRIPT",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "components",
        title: "STYLED COMPONENTS",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "figma",
        title: "WEB DESIGN",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
]

export const Skills = () => {
    return (
        <S.StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <Container>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    {skillData.map((s, index) => {
                        return <Skill iconId={s.iconId} key={index}
                                      title={s.title}
                                      text={s.text}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.StyledSkills>
    );
};




