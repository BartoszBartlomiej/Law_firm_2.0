import React from 'react';
import Footer from '../Footer';

import './MainContainer.scss';

const MainContainer = (props) => {
    return <main>{props.children}<Footer /></main>
}

export default MainContainer;