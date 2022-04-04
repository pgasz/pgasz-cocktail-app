import React from 'react';

import { Link } from 'react-router-dom';

const Cocktail = ({ id, image, info, glass, name }) => {
    return (
        <Link to={`/cocktail/${id}`} className="cocktail">
            <div className="img-container">
                <img src={image} alt={name} />
            </div>
            <div className="cocktail-footer">
                <h3>{name}</h3>
                <h4>{glass}</h4>
                <p>{info}</p>

                <div className="btn">details</div>
            </div>
        </Link>
    );
};

export default Cocktail;
