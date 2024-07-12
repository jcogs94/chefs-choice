from rest_framework import generics
from .serializers import RecipeSerializer
from .models import Recipe

class RecipeList(generics.ListCreateAPIView):
    queryset = Recipe.objects.all().order_by('id')
    serializer_class = RecipeSerializer

class RecipeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Recipe.objects.all().order_by('id')
    serializer_class = RecipeSerializer
