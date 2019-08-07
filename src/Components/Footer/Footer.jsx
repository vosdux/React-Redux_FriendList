import React from 'react';

import './Footer.css';

const Footer = ({ friends }) => {
    const length = friends.length;
    return(
        <div className="footer">
            <p>{`${length} ${
                length % 100 === 11 ? "друзей" : 
                length % 10 === 1 ? "друг" :
                length === 2 || length === 3 || length === 4 ? "друга" :
                "друзей"
            }`}</p>
        </div>
    );
};

export default Footer;