import React from 'react';
import {FlexWrapper} from "../../../componets/FlexWrapper";
import portrait from "../../../assets/img/portrait.jpeg";
import {Container} from "../../../componets/Container";
import {S} from "./Main_Styles";

export const Main = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper justify="space-around" align="center" wrap={"wrap"}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Vlad Kazyutchiz</span></S.Name>
                        <S.MainTitle>A Web Developer.</S.MainTitle>
                    </div>

                    <S.PhotoWrapper>
                        <S.Photo src={portrait} alt="It's me!!!"/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};