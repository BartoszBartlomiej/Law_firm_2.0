import React from 'react';

import './Block.scss';

const Block = (props) => {
  const { icon, title, contentBolded, content } = props;
  const iconDisplay = <i className={`fa ${icon}`} aria-hidden="true" />;
  return (
    <div className="block-wrapper">
      <p className="title">
        {iconDisplay}
        {title}
      </p>
      <div className="content">
        <strong className="text bolded">{contentBolded}</strong>
        <p className="text normal">{content}</p>
      </div>
    </div>
  );
};

export default Block;
