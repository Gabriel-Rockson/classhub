import os
import django_on_heroku

import dj_database_url


from .base import *

IS_HEROKU = "DYNO" in os.environ

SECRET_KEY = os.environ.get(
    "SECRET_KEY", default="hrhppn-&+r2+^n4siakw4)@8+ua@i^a(yokss$+ln@-a2z=v8j"
)

DEBUG = True


if IS_HEROKU:
    ALLOWED_HOSTS = ["*"]
else:
    ALLOWED_HOSTS = []

# Static Files
STATIC_ROOT = BASE_DIR / "staticfiles"
STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"

CORS_ORIGIN_WHITELIST = [
    "http://localhost:4173",
]
CSRF_TRUSTED_ORIGINS = CORS_ORIGIN_WHITELIST


# Database
MAX_CONN_AGE = 600

#DATABASES = {'default': dj_database_url.config(
#    default=os.environ.get("DATABASE_URL"),
#    conn_max_age=600
#)}

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "d40gtdt6jq0i4o",
        "USER": "pocanzwppwbqkj",
        "PASSWORD": "941e5c22a04896cbfc987927e99c8d4488f8a929d352827ef16b686e7aeffb50",
        "HOST": "ec2-63-34-180-86.eu-west-1.compute.amazonaws.com",
        "PORT": 5432,
    }
}


# Configure django app for heroku
django_on_heroku.settings(locals())

