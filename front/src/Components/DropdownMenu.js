import React, { useState,   useRef } from "react";
import ogu from "assets/ogu.jpeg"

const DropdownMenu = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);
  
    return (
        <div className="menu-container">
          <button style={{ backgroundImage: `url(${ogu})`}}onClick={onClick} className="menu-trigger"></button>
          <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
            <ul>
              <li><a href="/mate">프로필</a></li>
              <li><a href="/project">프로젝트 제안 확인</a></li>
              <li><a href="/">로그아웃</a></li>
            </ul>
          </nav>
        </div>
      );
  };

  export default DropdownMenu