# Generated by Django 5.0.6 on 2024-07-12 17:50

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes_api', '0010_remove_instruction_list_instructions_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ingredient_list',
            name='recipe',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='ingredient_list', to='recipes_api.recipe'),
        ),
        migrations.AlterField(
            model_name='instruction',
            name='list',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='instructions', to='recipes_api.instruction_list'),
        ),
        migrations.AlterField(
            model_name='instruction_list',
            name='recipe',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='instruction_list', to='recipes_api.recipe'),
        ),
    ]
