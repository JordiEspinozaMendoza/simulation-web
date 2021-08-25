from django.urls import path
from base.views import smirnov_views as views

urlpatterns = [
    path("test/", views.callTestSmirnov, name="testSmirnov"),
]
