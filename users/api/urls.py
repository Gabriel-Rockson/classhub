from django.urls import path
from users.api.views import (
    LoginAPIView,
    RefreshTokenAPIView,
    RegistrationAPIView,
    UserListAPIView,
    UserDetailAPIView,
)


urlpatterns = [
    path("auth/login", LoginAPIView.as_view(), name="auth-login"),
    path("auth/register", RegistrationAPIView.as_view(), name="auth-register"),
    path("auth/refresh", RefreshTokenAPIView.as_view(), name="auth-refresh"),
    path("users/", UserListAPIView.as_view()),
    path("users/<str:id>/", UserDetailAPIView.as_view()),
]
