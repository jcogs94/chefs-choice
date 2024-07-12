# Generated by Django 5.0.6 on 2024-07-12 16:50

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes_api', '0006_rename_ingredients_list_ingredient_list_ingredients_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='recipe',
            name='ingredient_list',
        ),
        migrations.RemoveField(
            model_name='recipe',
            name='instruction_list',
        ),
        migrations.AddField(
            model_name='ingredient_list',
            name='recipe',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='recipes_api.recipe'),
        ),
        migrations.AddField(
            model_name='instruction_list',
            name='recipe',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='recipes_api.recipe'),
        ),
    ]