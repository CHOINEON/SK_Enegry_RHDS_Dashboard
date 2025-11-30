import React from 'react';
import styled from 'styled-components';
import gradientBar from '@/assets/icons/gradientBar.svg';

const HeaderContainer = styled.div`

    height: 100%; 
    display: flex;
    align-items: center;
    padding: 0 20px;
    color: white; 
    font-weight: bold;
    font-size: 1.2em;
    

    background-image: url(${gradientBar});
    background-size: cover; 
    background-repeat: no-repeat;
    background-position: center;
`;

const HeaderContent = ({ title }) => {
    return (
        <HeaderContainer>
            {title}
        </HeaderContainer>
    );
};

export default HeaderContent;