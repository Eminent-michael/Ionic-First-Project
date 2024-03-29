import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.models';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  loadedRecipe: Recipe;

  constructor(private activatedRoute: ActivatedRoute, private recipesService: RecipesService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has("recipeId")){
        //Redirect
        return;
      }

      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
    });
  }

  onDeleteRecipe(){
    // this.alertCtrl.create({
    //   header: "Are you sure?",
    //   message: "Do you really want to delete the recipe?",
    //   buttons:[{
    //     text: 'Cancel',
    //     role: 'cancel'
    //   },{
    //     text: "Delete",
    //     role: ""
    //   }]
    // }).then(alertEl => {
    //   alertEl.present();
    // })
    this.recipesService.deleteRecipe(this.loadedRecipe.id)
    this.router.navigate(['/recipes']);
  }

}
