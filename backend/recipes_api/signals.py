from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Recipe, Ingredient_List

@receiver(post_save, sender=Recipe)
def create_ingredient_list(sender, instance, created, **kwargs):
    if created:
        Ingredient_List.objects.create(recipe=instance)
