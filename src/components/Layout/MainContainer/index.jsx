import React from 'react';
import Footer from '../Footer';
import Menu from '../Menu';

import './MainContainer.scss';

const MainContainer = (props) => {
  const { children } = props;
  return (
		<div className="main-container">
			<Menu />
				{children}
			<Footer />
		</div>
  );
};

export default MainContainer;
