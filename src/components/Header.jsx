import React from 'react';
import Greeting from "./src/components/Greeting";
import SocialLinks from "./components/SocialLinks";

const Header = () => {
    return (
        <nav>
            <Greeting />
            <SocialLinks />
        </nav>
    );
};