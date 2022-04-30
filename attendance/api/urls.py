from django.urls import path
from attendance.api.views import (
    StudentAttendanceListCreateAPIView,
    StudentAttendanceDetailAPIView,
    ClassListCreateAPIView,
    ClassDetailAPIView,
)


urlpatterns = [
    path("attendances/", StudentAttendanceListCreateAPIView.as_view()),
    path("attendances/<str:attendance_uid>/", StudentAttendanceDetailAPIView.as_view()),
    path("classes/", ClassListCreateAPIView.as_view()),
    path("classes/<str:class_uid>/", ClassDetailAPIView.as_view()),
]
