from rest_framework import serializers
from student.models import Student
from attendance.api.serializers import StudentAttendanceSerializer
from attendance.models import Class


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


# ! - I am defining the Class Serializer here so as to avoid import errors
class ClassSerializer(serializers.ModelSerializer):
    students = StudentSerializer(read_only=True, many=True)

    class Meta:
        model = Class
        fields = [
            "class_uid",
            "grade",
            "students",
        ]

    def create(self, validated_data):
        if Class.objects.filter(grade=validated_data["grade"]):
            raise serializers.ValidationError(f"Class {validated_data['grade']} exists already")
        instance = super(ClassSerializer, self).create(validated_data)
        instance.save()
        return instance