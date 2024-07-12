from django.contrib import admin
from .models import Recipe, Instruction, Ingredient_List, Ingredient

admin.site.register(Recipe)
admin.site.register(Instruction)
admin.site.register(Ingredient_List)
admin.site.register(Ingredient)
