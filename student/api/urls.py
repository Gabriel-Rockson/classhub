from django.urls import path

from student.api.views import StudentListCreateAPIView, StudentDetailAPIView

urlpatterns = [
    path("students/", StudentListCreateAPIView.as_view()),
    path("students/<str:student_uid>/", StudentDetailAPIView.as_view()),
]
