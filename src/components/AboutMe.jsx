import React from 'react';
import profilePicture from '..assets/KayleneKilbourn.jpg';

const AboutMe = () => {
    return (
        <div className="about-me">
            <img
                src={profilePicture}
                alt="Kaylene Kilbourn"
                style={{ width: '150px', borderRadius: '50%' }}
                />
                <p>
                Hi, I'm [Your Name]. I'm specializing in [Your Spec] and currently in my [Trimester] trimester. I love working with [Your Favorite Languages/Technologies]. After school, I plan to [Your Future Plans]. Outside of work and school, I enjoy [Your Hobbies].
                </p>
        </div>
    );
};

export default AboutMe;
