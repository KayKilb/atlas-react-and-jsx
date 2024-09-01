import React from 'react';
import OpenIcon from '../assets/open.svg';

const OpenLink = ({ link }) => {
    const handleClick = () => {
        window.open(link, '_blank');
    };

    return (
        <img
            src={openIcon}
            alt="Open Link"
            style={{ cursor: 'pointer' }}
            onClick={handleClick}
        />
    );
};

export default OpenLink;
