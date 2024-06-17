import styled from "styled-components";
import {font} from "../../styles/Common";
import {theme} from "../../styles/Theme";

const Footer = styled.footer`
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

export const S = {
    Footer,
    Name,
    SocialList,
    SocialItem,
    SocialLink,
    Copyright
}