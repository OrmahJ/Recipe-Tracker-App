import React, { useState } from "react";

function RecipeCreate({createRecipe, handleChange, formData}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const handleSubmit = (event) => {
    event.preventDefault()
    createRecipe(formData)
  }





  return (
    <form name="create">
      <table>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                value={formData.name}
                required />
            </td>

            <td>
              <input
                type="text"
                id="cuisine"
                name="cuisine"
                placeholder="Cuisine"
                onChange={handleChange}
                value={formData.cuisine}
                required />
            </td>

            <td>
              <input
                type="url"
                id="photo"
                name="photo"
                placeholder="URL"
                onChange={handleChange}
                value={formData.photo} />
            </td>

            <td>
              <textarea
                id="igredients"
                name="ingredients"
                placeholder="Ingredients"
                onChange={handleChange}
                value={formData.ingredients}
                required
                />
            </td>

            <td>
              <textarea
                id="preparation"
                name="preparation"
                placeholder="Preparation"
                onChange={handleChange}
                value={formData.preparation}
                required />
            </td>

            <td>
              <button type="submit" onClick={handleSubmit}>Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
