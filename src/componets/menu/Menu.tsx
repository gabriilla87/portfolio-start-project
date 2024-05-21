import React from 'react';
import styled from "styled-components";

export const Menu = () => {
    return (
        <nav>
            <StyledMenu>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Skills</a>
                </li>
                <li>
                    <a href="#">Works</a>
                </li>
                <li>
                    <a href="#">Testimony</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </StyledMenu>
        </nav>
    );
};

const StyledMenu = styled.ul`
    text-decoration: none;
    display: flex;
    gap: 20px;
    list-style-type: none;
`