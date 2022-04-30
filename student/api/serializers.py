from rest_framework import serializers
from student.models import Student
from attendance.api.serializers import StudentAttendanceSerializer


class StudentSerializer(serializers.ModelSerializer):
    gender_display = serializers.CharField(source="get_gender_display", read_only=True)
    race_display = serializers.CharField(source="get_race_display", read_only=True)
    attendances = StudentAttendanceSerializer(many=True, read_only=True)

    class Meta:
        model = Student
        fields = [
            "student_uid",
            "first_name",
            "middle_name",
            "last_name",
            "date_of_birth",
            "gender",
            "gender_display",
            "race",
            "race_display",
            "grade",
            "student_id",
            "address",
            "father_name",
            "father_contact",
            "mother_name",
            "mother_contact",
            "guardian_name",
            "guardian_email",
            "home_phone",
            "attendances",
        ]
        read_only_fields = ["attendances"]
        extra_kwargs = {"race": {"write_only": True}, "gender": {"write_only": True}}
