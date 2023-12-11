import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Books',
    path: '/books',
    icon: <i class="fa-solid fa-book-open"></i>,
    cName: 'nav-text'
  },
  {
    title: 'Electronics',
    path: '/electronics',
    icon: <i class="fa-solid fa-plug"></i>,
    cName: 'nav-text'
  },
  {
    title: 'Furniture',
    path: '/furniture',
    icon: <i class="fa-solid fa-chair"></i>,
    cName: 'nav-text'
  },
  {
    title: 'Other',
    path: '/Sell',
    icon: <i class="fa-solid fa-otter"></i>,
    cName: 'nav-text'
  },
  {
    title: 'About us',
    path: '/about',
    icon: <i class="fa-solid fa-circle-info"></i>,
    cName: 'nav-text'
  }
];