""" Модели записи и фото записи """

from django.db import models
from authorization_app.models import User

# Create your models here.
class ReportModel(models.Model):
    """ Модель записи """
    text = models.TextField(blank=True, null=True)
    emotion = models.TextField()
    date = models.DateField(auto_now_add=True)