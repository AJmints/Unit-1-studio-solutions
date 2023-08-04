import Description from "./Description"
import RecipeIngredients from "./Ingredients";
import RecipePhoto from "./RecipePhoto";
import style from "./Description.module.css"

export default function Part1Route() {

    return (
        <div> 
            <Description />
            <RecipeIngredients />
            <div className={style.recipePhoto}>
                <RecipePhoto />
            </div>
        </div>
    )
}