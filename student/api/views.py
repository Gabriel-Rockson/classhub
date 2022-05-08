from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from student.api.serializers import StudentSerializer
from student.models import Student


class StudentListCreateAPIView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated,]
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class StudentDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated,]
    lookup_field = "id"
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
