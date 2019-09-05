import React from 'react';
import { NavLink } from 'react-router-dom';
import PageContainer from '../PageContent';

import './Menu.scss';

const Menu = () => {
  const menuItems = [
    {
      adress: '/',
      text: 'strona główna',
    },
    {
      adress: '/about',
      text: 'o kancelarii',
    },
    {
      adress: '/specializations',
      text: 'specjalizacje',
    },
    {
      adress: '/price',
      text: 'cennik',
    },
    {
      adress: '/blog',
      text: 'blog',
    },
    {
      adress: '/contact',
      text: 'kontakt',
    },
  ];

  return (
    <PageContainer>
      <nav className="navigation-wrapper">
        <div className="navigation-logo">
          <i className="fa fa-balance-scale" aria-hidden="true" />
        </div>
        {menuItems.map((item) => (
          <div className="menu-item">
            <NavLink to={item.adress}>
              {item.text}
            </NavLink>
          </div>
        ))}
      </nav>
    </PageContainer>
  );
};


export default Menu;
