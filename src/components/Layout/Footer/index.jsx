import React from 'react';
import PageContainer from '../PageContent';
import Block from './Block';

import './Footer.scss';

const Footer = () => (
  <footer className="footer__wrapper">
    <PageContainer>
      <div className="content">
        <Block 
          title="Adres"
          icon="fa-map-marker"
          contentBolded="Kancelaria Adwokacka Izabela Baran"
          content="plac Solidarności 1/3/5/lok. 516
          53-661 Wrocław"
        />
        <Block 
          title="Telefon"
          icon="fa-phone"
          content="+48 111 222 333"
        />
        <Block 
          title="Email"
          icon="fa-envelope-o"
          content="adwokat@izabelabaran.pl
          kancelaria.izabelabaran@gmail.com"
        />
        <Block 
          title="Godziny otwarcia"
          icon="fa-calendar"
          content="pon-pt: 9:00-17:00"
        />
      </div>
    </PageContainer>
  </footer>
);

export default Footer;
