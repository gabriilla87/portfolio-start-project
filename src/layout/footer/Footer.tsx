import React from 'react';
import {Icon} from "../../componets/icon/Icon";
import {FlexWrapper} from "../../componets/FlexWrapper";
import {S} from "./Footer_Styles";


const socialItemsData = [
    {
        iconId: "instagram",
    },

    {
        iconId: "telegram",
    },

    {
        iconId: "vk",
    },

    {
        iconId: "linkedin",
    },
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.Name>Vladislav</S.Name>
                <S.SocialList>

                    {socialItemsData.map((s, index) => {
                        return(
                            <S.SocialItem key={index}>
                                <S.SocialLink href={"#"}>
                                    <Icon iconId={s.iconId} width={"21px"} height={"21px"} viewBox={"0 0 21 21"}/>
                                </S.SocialLink>
                            </S.SocialItem>
                        )
                    })}

                </S.SocialList>
                <S.Copyright>© 2024 Vladislav Kazyutchiz, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};