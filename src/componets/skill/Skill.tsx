import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

type SkillPropsType = {
    iconId: string
    title: string
    text: string

}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>{props.text}</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 30%;
    background-color: rgba(255, 255, 255, 0.56);
    margin: 10px;
`

const SkillTitle = styled.h3`
    text-align: center;
`

const SkillText = styled.span`
    text-align: center;
`