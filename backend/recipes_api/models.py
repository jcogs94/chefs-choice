from django.db import models

class Recipe(models.Model):
    name = models.CharField(max_length=50)
    style = models.CharField(max_length=50)
    time_to_complete = models.CharField(max_length=12)
    description = models.CharField(max_length=500)
    img_ref = models.CharField(max_length=150)

class Ingredient(models.Model):
    name = models.CharField(max_length=50)

class Ingredient_List(models.Model):
    recipe = models.OneToOneField(Recipe, related_name='ingredient_list', null=True, on_delete=models.CASCADE)
    ingredients = models.ManyToManyField(Ingredient)

class Instruction_List(models.Model):
    recipe = models.OneToOneField(Recipe, related_name='instruction_list', null=True, on_delete=models.CASCADE)

class Instruction(models.Model):
    text = models.CharField(max_length=500)
    list = models.ForeignKey(Instruction_List, related_name='instructions', null=True, on_delete=models.CASCADE)
