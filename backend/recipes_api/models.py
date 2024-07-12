from django.db import models

class Recipe(models.Model):
    name = models.CharField(max_length=50)
    style = models.CharField(max_length=50)
    time_to_complete = models.CharField(max_length=12)
    description = models.CharField(max_length=500)
    img_ref = models.CharField(max_length=150)

class Ingredient(models.Model):
    name = models.CharField(max_length=32)
    type = models.CharField(max_length=6)

class Ingredient_List(models.Model):
    ingredients = models.ManyToManyField(Ingredient)

class Instruction(models.Model):
    text = models.CharField(max_length=500)
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
