from django.contrib import admin
from teacher.models import Teacher


@admin.register(Teacher)
class TeacherAdmin(admin.ModelAdmin):
    list_display = ["__str__", "user", "grade", "email",  "cell_number"]
    list_filter = ["grade"]
    search_fields = ["first_name", "middle_name", "last_name", "email"]
