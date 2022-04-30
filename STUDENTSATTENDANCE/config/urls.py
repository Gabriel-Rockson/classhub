from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api-auth/", include("rest_framework.urls")),
    # apis urls
    path("api/v1/", include("student.api.urls")),
    path("", include("frontend.urls", namespace="frontend")),
]
