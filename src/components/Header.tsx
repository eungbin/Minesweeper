import React from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="menu">
        <Link to="/"><div className="menu-item">홈</div></Link>
        <Link to="/score"><div className="menu-item">최고기록</div></Link>
        <div className="menu-item">제작자</div>
      </div>
    </>
  )
}

export default Header;