from .base import *


DEBUG = False

ALLOWED_HOSTS = []


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgres',
        'NAME': 'students_attendance_db',
        'USER': 'hotice',
        'PASSWORD': 'testpass1234',
        'HOST': 'localhost',
        'PORT': 5432
    }
}