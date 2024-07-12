from django.urls import path
from . import views

urlpatterns = [
    path('api/recipes', views.RecipeList.as_view(), name='recipe_list')
    path('api/recipes/<int:pk>', views.RecipeDetail.as_view(), name='recipe_detail')
]
