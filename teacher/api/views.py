from rest_framework.generics import (ListCreateAPIView,
                                     RetrieveUpdateDestroyAPIView)
from rest_framework.permissions import IsAuthenticated
from teacher.api.serializers import TeacherSerializer
from teacher.models import Teacher


class TeacherListCreateAPIView(ListCreateAPIView):
    permission_classes = [
        IsAuthenticated,
    ]
    serializer_class = TeacherSerializer
    queryset = Teacher.objects.all()


class TeacherDetailAPIView(RetrieveUpdateDestroyAPIView):
    permission_classes = [
        IsAuthenticated,
    ]
    serializer_class = TeacherSerializer
    queryset = Teacher.objects.all()
    lookup_field = "id"
