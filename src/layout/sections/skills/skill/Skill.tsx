import React from 'react';
import {Icon} from "../../../../componets/icon/Icon";
import {FlexWrapper} from "../../../../componets/FlexWrapper";
import {S} from "../Skills_Styles";

type SkillPropsType = {
    iconId: string
    title: string
    text: string
    align?: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <S.StyledSkill>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.IconWrapper>
                    <Icon iconId={props.iconId}/>
                </S.IconWrapper>
                <S.SkillTitle>{props.title}</S.SkillTitle>
                <S.SkillText>{props.text}</S.SkillText>
            </FlexWrapper>
        </S.StyledSkill>
    );
};
