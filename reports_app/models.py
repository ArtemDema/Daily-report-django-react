""" Модели записи и фото записи """

from django.db import models
from authorization_app.models import User

# Create your models here.
class ReportModel(models.Model):
    """ Модель записи """
    text = models.TextField(blank=True, null=True)
    emotion = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)

class ReportImageModel(models.Model):
    """ Модель фото которые могут быть в записи """
    report = models.ForeignKey(ReportModel, on_delete=models.CASCADE)
    original = models.ImageField(upload_to="report_images/originals/")
    compressed = models.ImageField(upload_to="report_images/compressed/")