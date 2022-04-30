from rest_framework import generics
from student.api.serializers import StudentSerializer
from student.models import Student


class StudentListCreateAPIView(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class StudentDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    lookup_field = "student_uid"
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
