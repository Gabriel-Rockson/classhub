from django.urls import path
from teacher.api.views import TeacherDetailAPIView,TeacherListCreateAPIView

urlpatterns = [
    path("teachers/", TeacherListCreateAPIView.as_view()),
    path("teachers/<str:id>/", TeacherDetailAPIView.as_view())
]