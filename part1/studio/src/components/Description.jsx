import React from 'react';
import styles from './Description.module.css';

function RecipeAuthor() {

    let authorLink = "https://ranveerbrar.com/";
    let authorPhoto = "https://ranveerbrar.com/wp-content/uploads/2020/12/Image-about-me-ranveer-brar.png";
    let authorName = "Food Fables";
    return (
        <div className={styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt="Reasonable alt text" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Blog name</a>
            </div>
        </div>

    );

}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Recipe Title</h1>
                    <p>Short recipe description</p>
                </div>
                <RecipeAuthor />
            </div>
        );
    }
}

export default RecipeDescription;