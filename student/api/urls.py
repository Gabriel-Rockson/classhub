from django.urls import path

from student.api.views import StudentListCreateAPIView, StudentDetailAPIView

urlpatterns = [
    path("students/", StudentListCreateAPIView.as_view()),
    path("students/<str:id>/", StudentDetailAPIView.as_view()),
]
