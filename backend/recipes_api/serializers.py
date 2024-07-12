from rest_framework import serializers
from .models import Recipe, Ingredient, Ingredient_List, Instruction, Instruction_List

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ['name', 'type']

class IngredientListSerializer(serializers.ModelSerializer):
    ingredients = IngredientSerializer(many=True)
    
    class Meta:
        model = Ingredient_List
        fields = ['ingredients']

class InstructionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instruction
        fields = ['text']

class InstructionListSerializer(serializers.ModelSerializer):
    instructions = InstructionSerializer(many=True)

    class Meta:
        model = Instruction_List
        fields = ['instructions']

class RecipeSerializer(serializers.ModelSerializer):
    ingredients = IngredientListSerializer(many=True)
    instructions = InstructionListSerializer(many=True)
    
    class Meta:
        model = Recipe
        fields = ['id', 'name', 'style', 'time_to_complete', 'description', 'img_ref', 'ingredients', 'instructions']
