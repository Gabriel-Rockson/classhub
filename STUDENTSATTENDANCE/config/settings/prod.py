from .base import *


DEBUG = False

ALLOWED_HOSTS = ["localhost"]


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'students_attendance_db',
        'USER': 'hotice',
        'PASSWORD': 'testpass1234',
        'HOST': 'localhost',
        'PORT': 5432
    }
}