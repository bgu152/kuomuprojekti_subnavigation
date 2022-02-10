import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

let useClickOutside = (handler) => {//Handler är functionen som aktiveras när man klickar utanför
    let domNode = useRef(); //detta är hela diven som returneras. som documentqueryselector
  
    useEffect(() => {
      //detta händer när mousedown utanför
      let maybeHandler = (event) => {
        if (!domNode.current.contains(event.target)) {
          handler();
        }
      };
      //detta säger att mousdownHandler aktiveras vid mousedown
      document.addEventListener("mousedown", maybeHandler);
      
      // nedan städar bort event listener
      return () => {
        document.removeEventListener("mousedown", maybeHandler);
      };
    });
  
    return domNode;
  };

  export default useClickOutside;