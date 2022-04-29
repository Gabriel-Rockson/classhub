from rest_framework import serializers
from student.models import Student
from attendance.api.serializers import AttendanceListSerializer


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = [
            "student_uid",
            "first_name",
            "middle_name",
            "last_name",
            "date_of_birth",
            "gender",
            "race",
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
        ]
        read_only_fields = ["student_uid"]
