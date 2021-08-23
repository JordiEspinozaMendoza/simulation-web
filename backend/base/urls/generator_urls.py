from django.urls import path
from base.views import generator_views as views

urlpatterns = [
    path("generator/", views.generateNumbers, name="generator"),
]
