from rest_framework import generics
from attendance.models import StudentAttendance, Class
from attendance.api.serializers import StudentAttendanceSerializer
from student.api.serializers import ClassSerializer
from rest_framework.permissions import IsAuthenticated


class StudentAttendanceListCreateAPIView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = StudentAttendance.objects.all()
    serializer_class = StudentAttendanceSerializer


class StudentAttendanceDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    lookup_field = "id"
    queryset = StudentAttendance.objects.all()
    serializer_class = StudentAttendanceSerializer


class ClassListCreateAPIView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Class.objects.all()
    serializer_class = ClassSerializer


class ClassDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    lookup_field = "id"
    queryset = Class.objects.all()
    serializer_class = ClassSerializer
