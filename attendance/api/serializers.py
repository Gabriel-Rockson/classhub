from attendance.models import StudentAttendance, Class
from rest_framework import serializers


class StudentAttendanceSerializer(serializers.ModelSerializer):
    attendance_display = serializers.CharField(
        source="get_attendance_display", read_only=True
    )
    # student_name = serializers.CharField(source="student.first_name")

    class Meta:
        model = StudentAttendance
        fields = [
            "id",
            "student",
            "attendance_created",
            "attendance_updated",
            "attendance",
            "attendance_display",
        ]
        read_only_fields = [
            "attendance_created",
            "attendance_updated",
        ]
        extra_kwargs = {
            "student": {"write_only": True},
            "attendance": {"write_only": True},
        }


# NOTE - the class serializer is in student.api.serializers
