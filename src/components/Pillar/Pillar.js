import React from 'react';
import './Pillar.scss';

const Pillar = ({title, delay, onRouteChange}) => {
    return(
        <div className='pillar-container' style={{animationDelay:delay}} onClick={() => onRouteChange(title)}>
            <div>
                <h3>{title}</h3>
            </div>
        </div>
    );
}

export default Pillar;