from django.urls import path, re_path

from frontend import views


app_name = "frontend"
urlpatterns = [
    path("", views.Index.as_view(), name="index"),
    re_path(r"^(?:.*)/?$", views.Index.as_view()),
]