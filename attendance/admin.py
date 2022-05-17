from django.contrib import admin

from .models import Grade, StudentAttendance


@admin.register(Grade)
class GradeAdmin(admin.ModelAdmin):
    list_display = ["grade", "number_of_students"]


@admin.register(StudentAttendance)
class StudentAttendanceAdmin(admin.ModelAdmin):
    list_display = ["student", "created", "attendance"]
    list_filter = ["created", "student__grade"]
