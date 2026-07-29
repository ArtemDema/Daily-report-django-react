from rest_framework.serializers import ModelSerializer
from .models import *

class UsersSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "email", "password"]