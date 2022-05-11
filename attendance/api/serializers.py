from datetime import datetime

from attendance.models import Class, StudentAttendance
from django.core.exceptions import ObjectDoesNotExist
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
            "created",
            "updated",
            "attendance",
            "attendance_display",
        ]
        read_only_fields = [
            "created",
            "updated",
        ]
        extra_kwargs = {
            "student": {"write_only": True},
            "attendance": {"write_only": True},
        }

    def create(self, validated_data):
        """
        1. check if the attendance for today already exists for this student
        2. raise validation error if attendance exists
        """
        student_attendance_today_exists = False
        try:
            student_attendance_today = StudentAttendance.objects.get(
                student=validated_data["student"], created=datetime.today().date()
            )
            if student_attendance_today:
                student_attendance_today_exists = True
        except ObjectDoesNotExist as e:
            pass
        if student_attendance_today_exists:
            raise serializers.ValidationError(
                {"attendance": "Attendance for this student has been recorded today"}
            )
        instance = super(StudentAttendanceSerializer, self).create(validated_data)
        instance.save()
        return instance


# NOTE - the class serializer is in student.api.serializers
