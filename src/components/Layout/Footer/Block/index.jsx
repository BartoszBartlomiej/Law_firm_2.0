import React from 'react';

import './Block.scss';

const Block = (props) => {
    const icon = <i className={`fa ${props.icon}`} aria-hidden="true"></i>
    return (
        <div className="block-wrapper">
           <p className="title">{icon}{props.title}</p>
           <div className="content">
               <strong className="text bolded">{props.contentBolded}</strong>
               <p className="text normal">{props.content}</p>
           </div>
        </div>
    )
}

export default Block
