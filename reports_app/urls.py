from django.urls import path
from .views import ReportRender

urlpatterns = [
    path("", ReportRender.as_view(), name="report_page")
]