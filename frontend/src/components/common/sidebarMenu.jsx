import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, AreaChartOutlined, LineChartOutlined, BulbOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom'; // 라우팅 정보 사용

//  Menu items를 구성하는 함수 (Link와 연결)
const getItem = (label, key, icon, children, type) => {
  // antd Menu Item의 label에 Link 컴포넌트 삽입
  const labelWithLink = <Link to={key}>{label}</Link>;
  return {
    key,
    icon,
    label: labelWithLink,
    children,
    type,
  };
};

// 페이지에 맞는 아이콘과 키 값 설정
const menuItems = [
  getItem('홈 (대시보드)', '/', <HomeOutlined />),
  getItem('HHPS 가이던스', '/hhps', <AreaChartOutlined />),
  getItem('RHDS 가이던스', '/rhds', <LineChartOutlined />),
  getItem('Explainable AI', '/xai', <BulbOutlined />),
];

const SidebarMenu = () => {
  const location = useLocation(); // 현재 경로

  return (
    <Menu
      theme="dark" 
      mode="inline"
      
      selectedKeys={[location.pathname]} 
      items={menuItems}
      style={{ borderRight: 'none' }} 
    />
  );
};

export default SidebarMenu;