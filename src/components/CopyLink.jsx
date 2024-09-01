import React from 'react';
import copyIcon from '../assets/copy.svg'; //path to copy icon

const CopyLink = ({ link }) => {
    const handleClick = () => {
        navigator.clipboard.writeText(link);
    };

    retun (
        <
        img
            src={copyIcon}
            alt="Copy Link"
            className="copy"
            style={{ cursor: 'pointer' }}
            onClick={handleClick}
        />
    );
};

export default CopyLink;
