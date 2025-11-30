
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout, theme } from 'antd'; 
import MainLayout from './components/common/MainLayout';
import Layout from './components/common/Layout'; 
import DashboardPage from './pages/DashboardPage';
import HHPSGuidancePage from './pages/HHPSGuidancePage';
import RHDSGuidancePage from './pages/RHDSGuidancePage';
import XAIPage from './pages/XAIPage';

const { Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: {colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh' }}>

      <Sider 
          trigger={null} 
          collapsible 
          collapsed={collapsed}
          theme="dark" // 또는 light
        >
          {/* Sider 내부 메뉴는 MainLayout  */}
          <div className="demo-logo" />
          {/* Sidebar 컴포넌트를 Menu 컴포넌트로 대체  진행 중 */}
          {/* <Sidebar collapsed={collapsed} /> */} 
        </Sider>
        <MainLayout 
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          colorBgContainer={colorBgContainer}
          borderRadiusLG={borderRadiusLG}
        >
          <Routes>

            <Route path="/" element={<DashboardPage />} />
            <Route path="/hhps" element={<HHPSGuidancePage />} />
            <Route path="/rhds" element={<RHDSGuidancePage />} />
            <Route path="/xai" element={<XAIPage />} />
          </Routes>
        </MainLayout>

      </Layout>
    </BrowserRouter>
  )
}

export default App;