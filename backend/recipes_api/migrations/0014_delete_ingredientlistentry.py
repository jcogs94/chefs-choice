# Generated by Django 5.0.6 on 2024-07-12 20:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('recipes_api', '0013_remove_ingredient_type'),
    ]

    operations = [
        migrations.DeleteModel(
            name='IngredientListEntry',
        ),
    ]