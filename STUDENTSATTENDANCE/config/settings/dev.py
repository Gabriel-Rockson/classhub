from .base import *


DEBUG = True

ALLOWED_HOSTS = ["*"]

INSTALLED_APPS += [
    "django_extensions",
]

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "students_attendance_db",
        "USER": "hotice",
        "PASSWORD": "testpass1234",
        "HOST": "localhost",
        "PORT": 5432,
    }
}
