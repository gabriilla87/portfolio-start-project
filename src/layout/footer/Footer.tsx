import React from 'react';
import styled from "styled-components";
import {Icon} from "../../componets/icon/Icon";
import {FlexWrapper} from "../../componets/FlexWraper";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

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
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;
`


const Name = styled.span`
    ${font({family: '"Josefin Sans", sans-serif', weight: 700, Fmax: 22, Fmin: 16})}
    letter-spacing: 3px;
`

const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`
    height: 35px;
    width: 35px;
    border-radius: 25px;
    background-color: rgba(255, 255, 255, 0.10);
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    color: ${theme.colors.accent};
    
    &:hover {
        color: ${theme.colors.primaryBg};
        background-color: ${theme.colors.accent};
        
        transform: translateY(-4px);
    }
`

const Copyright = styled.small`
    color: rgba(255, 255, 255, 0.50);
    text-align: center;
    font-size: 12px;
    font-weight: 400;
`