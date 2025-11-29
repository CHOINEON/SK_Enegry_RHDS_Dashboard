import React from 'react';
import { Link } from 'react-router-dom';
import { useAppStore } from "@/hooks/useAppStore";

import { ReactComponent as HomeIcon } from '@/assets/icons/home.svg';
import { ReactComponent as SettingIcon } from '@/assets/icons/setting.svg';


const navItems = [
   { to: "/", label: "홈 (대시보드)", icon: HomeIcon}, 
   { to: "/hhps", label: "HHPS 가이던스", icon: SettingIcon}, 
   { to: "/rhds", label: "RHDS 가이던스", icon: SettingIcon}, 
   { to: "/xai", label: "Explainable AI", icon: SettingIcon}, 
];

const Sidebar = () => {
    // 테마 상태 및 토글 함수
    const { theme, toggleTheme } = useAppStore(); 

    return (
        <aside style={{ width: '200px', backgroundColor: '#333', color: 'white', padding: '15px' }}>
            <h2>SK Energy</h2>
            <nav>
                {navItems.map(item => (
                    <div key={item.to} style={{ margin: '15px 0', display: 'flex', alignItems: 'center'  }}>
                        <Link to={item.to} style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                            <item.icon style={{width: '24px' , height: '24px', marginRight: '10px', fill: 'white'}} /> 
                            {item.label}
                        </Link>
                    </div>
                ))}
            </nav>
            
            <div style={{ position: 'absolute', bottom: '20px' }}>
                <label>
                    {theme === 'light' ? '🌞 Light' : '🌙 Dark'}
                    <input 
                        type="checkbox" 
                        checked={theme === 'dark'} 
                        onChange={toggleTheme} 
                    />
                </label>
            </div>
        </aside>
    );
};

export default Sidebar;