import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [cocktail, setCocktail] = useState(null);

    useEffect(() => {
        setLoading(true);
        async function getCocktail() {
            try {
                const dataFetch = await (await fetch(`${url}${id}`)).json();

                if (dataFetch) {
                    const {
                        strDrink: name,
                        strDrinkThumb: image,
                        strAlcoholic: info,
                        strCategory: category,
                        strGlass: glass,
                        strInstructions: instructions,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    } = dataFetch.drinks[0];
                    const ingredients = [
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    ];
                    const newCocktail = {
                        name,
                        image,
                        info,
                        category,
                        glass,
                        instructions,
                        ingredients,
                    };
                    setCocktail(newCocktail);
                } else {
                    setCocktail(null);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getCocktail();
        setLoading(false);
    }, [id]);

    if (loading) {
        return <Loading></Loading>;
    }
    if (!cocktail) {
        return <h2 className="section-title">nie znaleziono koktajlu :-(</h2>;
    } else {
        const {
            name,
            image,
            category,
            info,
            glass,
            instructions,
            ingredients,
        } = cocktail;
        return (
            <section className="cocktail-section">
                <h2>{name}</h2>
                <div className="drink">
                    <div className="img-container">
                        <img src={image} alt={name}></img>
                    </div>
                    <div className="drink-info">
                        <p>
                            <span className="drink-data">name :</span> {name}
                        </p>
                        <p>
                            <span className="drink-data">category :</span>{' '}
                            {category}
                        </p>
                        <p>
                            <span className="drink-data">info :</span> {info}
                        </p>
                        <p>
                            <span className="drink-data">glass :</span> {glass}
                        </p>
                        <p>
                            <span className="drink-data">instructons :</span>{' '}
                            {instructions}
                        </p>
                        <p>
                            <span className="drink-data">ingredients :</span>
                            {ingredients.map((item, index) => {
                                return item ? (
                                    <span key={index}> {item}</span>
                                ) : null;
                            })}
                        </p>
                    </div>
                </div>
                <Link to="/" className="btn">
                    back home
                </Link>
            </section>
        );
    }
};

export default SingleCocktail;
