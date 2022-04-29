from django.urls import path

from frontend import views


app_name = "frontend"
urlpatterns = [
    path("", views.Index.as_view(), name="index"),
]
