import React from 'react';
import './PageContent.scss';

const PageContent = (props) => (
    <div className="page-container">
        {props.children}
    </div>
);

export default PageContent;
