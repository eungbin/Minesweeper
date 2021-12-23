import React from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="menu">
        <div className="menu-item">홈</div>
        <div className="menu-item">최고점수</div>
        <div className="menu-item">제작자</div>
      </div>
    </>
  )
}

export default Header;