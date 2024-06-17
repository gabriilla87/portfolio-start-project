import React from 'react';
import {SectionTitle} from "../../../componets/SectionTitle";
import {Button} from "../../../componets/button/Button";
import {Container} from "../../../componets/Container";
import {S} from "./Contact_Styles";

export const Contact: React.FC = () => {
    return (
        <S.Contact>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form>
                    <S.Field placeholder={"name"}/>
                    <S.Field placeholder={"subject"}/>
                    <S.Field placeholder={"message"} as={"textarea"}/>
                    <Button>SEND MESSAGE</Button>
                </S.Form>
            </Container>
        </S.Contact>
    );
};
