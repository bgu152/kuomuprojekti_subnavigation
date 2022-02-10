import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import useClickOutside from './useClickOutside';

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  `;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width:250px;
  height:100vh;
  display:flex;
  justify-content:center;
  position:fixed;
  top:0;
  // nedan flytter objektet till höger
  left:${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition:350ms;
  z-index:10;
`

const SidebarWrap = styled.div`
  width:100%;
  `
  
const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  }

  let domNode = useClickOutside(() => {
    setSidebar(false);
  })


  return (
    <div ref={domNode}>
      <Nav>
        <NavIcon to='#'>
          <FaIcons.FaBars onClick={showSidebar} />
        </NavIcon>
      </Nav>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon to='#'>
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          </NavIcon>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />
          })}
        </SidebarWrap>
      </SidebarNav>
    </div>
  );
};

export default Sidebar;
