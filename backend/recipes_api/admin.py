from django.contrib import admin
from .models import Recipe, Ingredient, Ingredient_List, Instruction, Instruction_List

admin.site.register(Recipe)
admin.site.register(Ingredient)
admin.site.register(Ingredient_List)
admin.site.register(Instruction)
admin.site.register(Instruction_List)
