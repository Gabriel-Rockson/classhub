from django.urls import path
from attendance.api.views import (
    StudentAttendanceListCreateAPIView,
    StudentAttendanceTodayListAPIView,
    StudentAttendanceDetailAPIView,
    GradeListCreateAPIView,
    GradeDetailAPIView,
    GradeAttendancesListAPIView,
)


urlpatterns = [
    path("attendances/", StudentAttendanceListCreateAPIView.as_view()),
    path("attendances/today/", StudentAttendanceTodayListAPIView.as_view()),
    path("attendances/<str:id>/", StudentAttendanceDetailAPIView.as_view()),
    path("classes/", GradeListCreateAPIView.as_view()),
    path("classes/<str:id>/", GradeDetailAPIView.as_view()),
    path("classes/attendances/<str:id>/", GradeAttendancesListAPIView.as_view())
]
