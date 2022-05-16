from rest_framework import generics
from attendance.models import StudentAttendance, Grade
from attendance.api.serializers import StudentAttendanceSerializer
from student.api.serializers import GradeSerializer
from rest_framework.permissions import IsAuthenticated
from datetime import datetime


class StudentAttendanceListCreateAPIView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = StudentAttendance.objects.all()
    serializer_class = StudentAttendanceSerializer


class StudentAttendanceTodayListAPIView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = StudentAttendance.objects.filter(created=datetime.today().date())
    serializer_class = StudentAttendanceSerializer


class StudentAttendanceDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    lookup_field = "id"
    queryset = StudentAttendance.objects.all()
    serializer_class = StudentAttendanceSerializer


class GradeListCreateAPIView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Grade.objects.all()
    serializer_class = GradeSerializer


class GradeDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    lookup_field = "id"
    queryset = Grade.objects.all()
    serializer_class = GradeSerializer


class GradeAttendancesListAPIView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = StudentAttendanceSerializer
    
    def get_queryset(self):
        return StudentAttendance.objects.grade_attendances(self.kwargs["id"])
    