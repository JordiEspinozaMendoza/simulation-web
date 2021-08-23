from django.urls import path
from base.views import frequency_views as views

urlpatterns = [
    path("test/", views.callTestFrequency, name="test_frequency"),
]
