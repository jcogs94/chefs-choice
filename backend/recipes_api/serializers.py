from rest_framework import serializers
from .models import Recipe, Ingredient, Ingredient_List, Instruction, Instruction_List

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ['name']

class IngredientListSerializer(serializers.ModelSerializer):
    ingredients = IngredientSerializer(many=True)
    
    class Meta:
        model = Ingredient_List
        fields = ['ingredients']
    
    def to_representation(self, instance):
        ingredients = instance.ingredients.all()
        return [ingredient.name for ingredient in ingredients]

class InstructionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instruction
        fields = ['text']

class InstructionListSerializer(serializers.ModelSerializer):
    instructions = InstructionSerializer(many=True)

    class Meta:
        model = Instruction_List
        fields = ['instructions']
    
    def to_representation(self, instance):
        instructions = instance.instructions.all()
        return [instruction.text for instruction in instructions]

class RecipeSerializer(serializers.ModelSerializer):
    ingredients = IngredientListSerializer(source='ingredient_list', required=False)
    instructions = InstructionListSerializer(source='instruction_list', required=False)
    
    class Meta:
        model = Recipe
        fields = ['id', 'name', 'style', 'time_to_complete', 'description', 'img_ref', 'ingredients', 'instructions']
    
    def create(self, validated_data):
        recipe = Recipe.objects.create(
            name=validated_data['name'],
            style=validated_data['style'],
            time_to_complete=validated_data['time_to_complete'],
            description=validated_data['description'],
            img_ref=validated_data['img_ref']
        )
        Ingredient_List.objects.create(recipe=recipe)
        Instruction_List.objects.create(recipe=recipe)
        return recipe
