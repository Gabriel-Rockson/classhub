from django.shortcuts import render
from django.views.generic import TemplateView


catchall = TemplateView.as_view(template_name="index.html")