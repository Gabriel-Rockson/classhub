from django.contrib import admin

from attendance.models import StudentAttendance
from student.models import Student


class StudentAttendanceInline(admin.TabularInline):
    model = StudentAttendance
    extra = 0


@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ["__str__", "student_id", "grade", "race"]
    list_filter = ["grade", "race"]
    inlines = [
        StudentAttendanceInline,
    ]
