import { Injectable } from '@angular/core';
import { Recipe } from './recipe.models';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipes: Recipe[] = [
    {
      id: "r1",
      title: "Jolly rice",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Jollof_Rice_with_Stew.jpg/1200px-Jollof_Rice_with_Stew.jpg",
      ingredients: ["Rice", "Pepper", "onion", "Maggi", "Vegetable oil"]
    },

    {
      id: "r2",
      title: "Fried rice",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn27eopZbbY9ZwDTV1NaCMsV2iQVnIuoL-VQ&usqp=CAU",
      ingredients: ["Rice","Green beans", "Maggi", "Vegetable oil"]
    },

    {
      id: "r3",
      title: "Beans",
      imageUrl: "https://www.pressurecookrecipes.com/wp-content/uploads/2022/09/instant-pot-baked-beans.jpg",
      ingredients: ["Beans","Palm oil", "Salt", "Pepper"]
    },
  ]

  constructor() { }

  getAllRecipes(){
    return[...this.recipes]
  }

  getRecipe(recipeId: string | null) {
    return {
      ...this.recipes.find(recipe => {
      return recipe.id === recipeId
    })}
  }

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe => {
      console.log("RecipeId: ", recipe.id == recipeId)
      return recipe.id !== recipeId;
    })
  }
}
