from datetime import datetime

from attendance.models import Grade, StudentAttendance
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import serializers


class StudentAttendanceSerializer(serializers.ModelSerializer):
    attendance_display = serializers.CharField(
        source="get_attendance_display", read_only=True
    )
    # student_name = serializers.CharField(source="student.first_name")
    student_name = serializers.CharField(source="student.__str__", read_only=True)

    class Meta:
        model = StudentAttendance
        fields = [
            "id",
            "student",
            "student_name",
            "created",
            "updated",
            "attendance",
            "attendance_display",
        ]
        read_only_fields = [
            "created",
            "updated",
        ]
        # extra_kwargs = {
        #     "attendance": {"write_only": True},
        # }

    def create(self, validated_data):
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
