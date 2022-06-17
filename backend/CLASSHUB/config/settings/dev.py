from .base import *
import os


SECRET_KEY = os.environ.get(
    "SECRET_KEY", default="hrhppn-&+r2+^n4siakw4)@8+ua@i^a(yokss$+ln@-a2z=v8j"
)

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


# CORS

CORS_ORIGIN_WHITELIST = [
    "http://localhost:3000",
    "http://localhost:4173",
]
CSRF_TRUSTED_ORIGINS = CORS_ORIGIN_WHITELIST