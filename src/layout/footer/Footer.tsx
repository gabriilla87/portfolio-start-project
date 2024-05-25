import React from 'react';
import styled from "styled-components";
import {Icon} from "../../componets/icon/Icon";
import {FlexWrapper} from "../../componets/FlexWraper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Vladislav</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink href={"#"}>
                            <Icon iconId={"instagram"} width={"21px"} height={"21px"} viewBox={"0 0 21 21"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink href={"#"}>
                            <Icon iconId={"telegram"} width={"21px"} height={"21px"} viewBox={"0 0 21 21"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink href={"#"}>
                            <Icon iconId={"vk"} width={"21px"} height={"21px"} viewBox={"0 0 21 21"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink href={"#"}>
                            <Icon iconId={"linkedin"} width={"21px"} height={"21px"} viewBox={"0 0 21 21"}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2024 Vladislav Kazyutchiz, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #c2f8ab;
    min-height: 30vh;
`

const Name = styled.span`

`

const SocialList = styled.ul`
    display: flex;
    gap: 30px;
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`

`

const Copyright = styled.small`

`