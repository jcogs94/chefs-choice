# Generated by Django 5.0.6 on 2024-07-12 17:36

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes_api', '0009_remove_instruction_list_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='instruction_list',
            name='instructions',
        ),
        migrations.AddField(
            model_name='instruction',
            name='list',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='recipes_api.instruction_list'),
        ),
    ]
