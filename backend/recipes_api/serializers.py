from rest_framework import serializers
from .models import Recipe, Ingredient, Ingredient_List, Instruction, Instruction_List

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ['name']

class IngredientListSerializer(serializers.ModelSerializer):
    ingredients = serializers.ListField(child=serializers.CharField())

    class Meta:
        model = Ingredient_List
        fields = ['ingredients']
    
    def to_representation(self, instance):
        ingredients = instance.ingredients.all()
        return [ingredient.name for ingredient in ingredients]
    
    def to_internal_value(self, data):
        if isinstance(data, list):
            return {'ingredients': data}
        ingredients = data.get('ingredients', [])
        if not isinstance(ingredients, list):
            raise serializers.ValidationError({
                'ingredients': 'Expected a list of strings.'
            })
        return {'ingredients': ingredients}


class InstructionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instruction
        fields = ['text']

class InstructionListSerializer(serializers.ModelSerializer):
    instructions = serializers.ListField(child=serializers.CharField())

    class Meta:
        model = Instruction_List
        fields = ['instructions']
    
    def to_representation(self, instance):
        instructions = instance.instructions.all()
        return [instruction.text for instruction in instructions]
    
    def to_internal_value(self, data):
        if isinstance(data, list):
            return {'instructions': data}
        instructions = data.get('instructions', [])
        if not isinstance(instructions, list):
            raise serializers.ValidationError({
                'instructions': 'Expected a list of strings.'
            })
        return {'instructions': instructions}



class RecipeSerializer(serializers.ModelSerializer):
    ingredients = IngredientListSerializer(source='ingredient_list', required=False)
    instructions = InstructionListSerializer(source='instruction_list', required=False)
    
    class Meta:
        model = Recipe
        fields = ['id', 'name', 'style', 'time_to_complete', 'description', 'img_ref', 'ingredients', 'instructions']
    
    def create(self, validated_data):
        ingredients_data = validated_data.pop('ingredient_list', {}).get('ingredients', [])
        instructions_data = validated_data.pop('instruction_list', {}).get('instructions', [])
        
        recipe = Recipe.objects.create(**validated_data)
        ingredient_list = Ingredient_List.objects.create(recipe=recipe)
        instruction_list = Instruction_List.objects.create(recipe=recipe)

        for ingredient_name in ingredients_data:
            ingredient = Ingredient.objects.create(name=ingredient_name)
            ingredient_list.ingredients.add(ingredient)

        for instruction_text in instructions_data:
            Instruction.objects.create(list=instruction_list, text=instruction_text)
        
        return recipe

    def update(self, instance, validated_data):
        ingredients_data = validated_data.pop('ingredient_list', {}).get('ingredients', [])
        instructions_data = validated_data.pop('instruction_list', {}).get('instructions', [])
        
        instance.name = validated_data.get('name', instance.name)
        instance.style = validated_data.get('style', instance.style)
        instance.time_to_complete = validated_data.get('time_to_complete', instance.time_to_complete)
        instance.description = validated_data.get('description', instance.description)
        instance.img_ref = validated_data.get('img_ref', instance.img_ref)
        instance.save()

        if ingredients_data:
            ingredient_list = instance.ingredient_list
            ingredient_list.ingredients.clear()
            for ingredient_name in ingredients_data:
                ingredient = Ingredient.objects.create(name=ingredient_name)
                ingredient_list.ingredients.add(ingredient)
        
        if instructions_data:
            instruction_list = instance.instruction_list
            instruction_list.instructions.all().delete()
            for instruction_text in instructions_data:
                Instruction.objects.create(list=instruction_list, text=instruction_text)

        return instance

