from django.urls import path
from attendance.api.views import (
    StudentAttendanceListCreateAPIView,
    StudentAttendanceDetailAPIView,
)


urlpatterns = [
    path("attendances/", StudentAttendanceListCreateAPIView.as_view()),
    path("attendances/<str:attendance_uid>/", StudentAttendanceDetailAPIView.as_view()),
]
