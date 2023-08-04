import styles from './Description.module.css';
import React from 'react';

let recipeTitle = "Delicious Pizza";
let recipeDescription = "Sometimes all you want at the end of the day is a simple cheese pizza. This recipe turns simple into sublime with the addition of an exceptional pizza dough, low-moisture mozzarella cheese, and an easy to make tomato sauce that hits all of the right sweet and savory notes to marry all of the flavors in this pie. A simple garnish of fresh herbs, and you've got perfection on a plate.";


const RecipeAuthor = () => {

    let authorLink = "https://www.pixar.com/feature-films/ratatouille";
    let authorPhoto = "https://static01.nyt.com/images/2007/06/13/dining/13rat600a.jpg?quality=75&auto=webp";
    let authorName = "Remy ";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>More about Remy</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component {
    render() {
        return (
        <div> 
            <div className={styles.recipeDescription}>
            <h1>{recipeTitle}</h1>
            <p>{recipeDescription}</p>
            </div>
            <RecipeAuthor />
        </div> 
        )
    }
}

export default RecipeDescription