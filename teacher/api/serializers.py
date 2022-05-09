from rest_framework import serializers
from teacher.models import Teacher


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = [
            "id",
            "first_name",
            "middle_name",
            "last_name",
            "email",
            "grade",
            "address",
            "cell_number",
        ]
