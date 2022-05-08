from rest_framework import generics
from attendance.models import StudentAttendance, Class
from attendance.api.serializers import StudentAttendanceSerializer
from student.api.serializers import ClassSerializer


class StudentAttendanceListCreateAPIView(generics.ListCreateAPIView):
    queryset = StudentAttendance.objects.all()
    serializer_class = StudentAttendanceSerializer


class StudentAttendanceDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    lookup_field = "id"
    queryset = StudentAttendance.objects.all()
    serializer_class = StudentAttendanceSerializer


class ClassListCreateAPIView(generics.ListCreateAPIView):
    queryset = Class.objects.all()
    serializer_class = ClassSerializer


class ClassDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    lookup_field = "id"
    queryset = Class.objects.all()
    serializer_class = ClassSerializer
