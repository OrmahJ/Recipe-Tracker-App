import React, { useState } from "react"


function RecipeLayout ({recipe, deleteRecipe}) {


    return (
        
        <tr>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td><img className="small_img" src={recipe.photo}/></td>
            <td className="content_td">{recipe.ingredients}</td>
            <td className="content_td">{recipe.preparation}</td>
            <td><button name="delete" onClick={deleteRecipe}>Delete</button></td>
        </tr>
        
    )
}

export default RecipeLayout