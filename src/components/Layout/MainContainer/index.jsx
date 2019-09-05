import React from 'react';
import Footer from '../Footer';

import './MainContainer.scss';

const MainContainer = (props) => {
  const { children } = props;
  return (
		<>
		<main>
			{children}
			<Footer />
		</main>
		</>
  );
};

export default MainContainer;
