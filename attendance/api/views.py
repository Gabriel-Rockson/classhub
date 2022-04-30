from rest_framework import generics
from attendance.models import StudentAttendance
from attendance.api.serializers import (
    StudentAttendanceSerializer,
)


class StudentAttendanceListCreateAPIView(generics.ListCreateAPIView):
    queryset = StudentAttendance.objects.all()
    serializer_class = StudentAttendanceSerializer


class StudentAttendanceDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    lookup_field = "attendance_uid"
    queryset = StudentAttendance.objects.all()
    serializer_class = StudentAttendanceSerializer
