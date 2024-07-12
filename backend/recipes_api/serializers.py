from rest_framework import serializers
from .models import Recipe, Ingredient_List, Ingredient, Instruction

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ['name', 'type']

class Ingredient_ListSerializer(serializers.ModelSerializer):
    ingredients = IngredientSerializer(many=True)
    
    class Meta:
        model = Ingredient_List
        fields = ['ingredients']

class InstructionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instruction
        fields = ['text']

class RecipeSerializer(serializers.ModelSerializer):
    ingredients = Ingredient_ListSerializer(many=True)
    instructions = InstructionSerializer(many=True)
    
    class Meta:
        model = Recipe
        fields = ['id', 'name', 'style', 'time_to_complete', 'description', 'img_ref', 'ingredients', 'instructions']
