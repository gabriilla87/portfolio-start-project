import React from 'react';
import {SectionTitle} from "../../../componets/SectionTitle";
import {FlexWrapper} from "../../../componets/FlexWrapper";
import {Work} from "./work/Work";
import {TabMenu} from "./tabMenu/TabMenu";
import socialImg from "../../../assets/img/social.png";
import countdownImg from "../../../assets/img/countdown.png";
import {Container} from "../../../componets/Container";
import {S} from "./Works_Styles";

const worksItems = ["ALL", "LANDING PAGE", "REACT", "SPA"]

const workData = [
    {
        title: "Social Network",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        src: socialImg,
    },

    {
        title: "Timer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        src: countdownImg,
    },
]

export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    {workData.map((w, index) => {
                        return <Work title={w.title} key={index}
                              text={w.text}
                              src={w.src}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};


