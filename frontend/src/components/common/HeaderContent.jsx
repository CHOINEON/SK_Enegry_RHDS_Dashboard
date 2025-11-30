import React from 'react';
import styled from 'styled-components';

import gradientBar from '@/assets/icons/gradientBar.svg';

const HeaderContentContainer = styled.div`
    flex-grow: 1; 
    display: flex;
    align-items: center;
    // justify-content: space-between;
    height: 100%;
   
    color: white; 
    font-weight: bold;
    padding-right: 20px;
    
    // 이전에 Header에 넣기로 했던 배경 스타일을 여기서 직접 적용하지 않고
    // MainLayout에서 Header 컴포넌트 전체에 스타일링을 적용하거나,
    // 이 컨텐츠 자체에 Styled Components를 적용하는 것이 더 좋습니다.
    
    // 임시 스타일: 배경 이미지를 antd Header에 적용하는 대신,
    // 제목만 표시하도록 간단하게 구현합니다.
    background-image: url(${gradientBar});
    background-size: cover;
    background-repeat: no-repeat;
`;

const HeaderContent = ({ title }) => {
    return (
        <HeaderContentContainer>
            {/* 상단 제목 */}
            <div>{title}</div>
            
            {/* 테마 토글 등 추가 요소 */}
        </HeaderContentContainer>
    );
};

export default HeaderContent;