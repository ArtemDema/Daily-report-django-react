from rest_framework.serializers import ModelSerializer
from .models import *

class ReportsSerializer(ModelSerializer):
    class Meta:
        model = ReportModel
        fields = ["text", "emotion", "author"]

class ReportsImageSerializer(ModelSerializer):
    class Meta:
        model = ReportImageModel
        fields = ["report", "original", "compressed"]