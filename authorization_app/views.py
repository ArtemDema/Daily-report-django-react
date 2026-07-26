from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from .serializer import *

# Create your views here.
class AuthorizationRender(APIView):
    def get(self, request):
        output = [
            {
                "username": output.username,
            } for output in User.objects.all()
        ]
        return Response(output)

    def post(self, request):
        serializer = UsersSerializer(data = request.data)
        if serializer.is_valid(raise_exception = True):
            serializer.save()
            return Response(serializer.data)