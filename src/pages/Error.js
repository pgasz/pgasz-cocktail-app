import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <section className="error-page section">
            <h1>
                We do not find that... <br /> Go back to the home page
            </h1>
            <Link to="/" className="btn">
                back home
            </Link>
        </section>
    );
};

export default Error;
