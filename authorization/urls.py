from django.urls import path
from .views import *

urlpatterns = [
    path("", AuthorizationRender.as_view(), name = "authorization")
]