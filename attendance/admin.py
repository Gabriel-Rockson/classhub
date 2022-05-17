from django.contrib import admin

from attendance.models import Grade, StudentAttendance
from attendance.forms import GradeForm
from student.models import Student


class StudentsInline(admin.StackedInline):
    model = Student
    extra = 0


@admin.register(Grade)
class GradeAdmin(admin.ModelAdmin):
    form = GradeForm
    list_display = ["grade", "number_of_students"]
    inlines = [
        StudentsInline,
    ]


@admin.register(StudentAttendance)
class StudentAttendanceAdmin(admin.ModelAdmin):
    list_display = ["student", "created", "attendance"]
    list_filter = ["created", "student__grade"]
