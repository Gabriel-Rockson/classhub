from django.contrib import admin
from users.models import User


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ["username", "email", "is_staff", "is_superuser", "teacher_profile"]
    list_filter = ["is_staff", "is_superuser"]
    search_fields = ["email"]
