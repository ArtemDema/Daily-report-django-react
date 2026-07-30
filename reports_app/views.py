from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from .serializer import *

# Create your views here.
class ReportRender(APIView):
    def get(self, request):
        output = [
            {
                "emotion": output.emotion,
                "date": output.date,
                "text": output.text
            } for output in ReportModel.objects.all()
        ]
        return Response(output)

    def post(self, request):
        serializer = ReportsSerializer(data = request.data)
        if serializer.is_valid(raise_exception = True):
            serializer.save()
            return Response(serializer.data)