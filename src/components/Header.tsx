import React, { useState } from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';
import Modal from './Modal';

const Header = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <div className="menu">
        <Link to="/"><div className="menu-item">홈</div></Link>
        <Link to="/score"><div className="menu-item">내 기록</div></Link>
        <div className="menu-item" onClick={openModal}>제작자</div>
        <Modal open={modal} close={closeModal} header="제작자">
          김응빈 (programmer97@naver.com) <br />
          https://github.com/eungbin
        </Modal>
      </div>
    </>
  )
}

export default Header;