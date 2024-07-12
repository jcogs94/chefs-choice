from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Recipe, Ingredient_List, Instruction_List

@receiver(post_save, sender=Recipe)
def create_lists(sender, instance, created, **kwargs):
    if created:
        Ingredient_List.objects.create(recipe=instance)
        Instruction_List.objects.create(recipe=instance)
