from django.urls import path
from .views import *

urlpatterns = [
    path("register/", AuthorizationRender.as_view(), name = "authorization")
]