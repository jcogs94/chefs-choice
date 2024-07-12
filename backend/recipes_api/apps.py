from django.apps import AppConfig


class RecipesApiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'recipes_api'

    # def ready(self):
    #     import recipes_api.signals
