import os
import django_on_heroku

import dj_database_url

from .base import *

IS_HEROKU = "DYNO" in os.environ

SECRET_KEY = os.environ.get(
    "SECRET_KEY", default="hrhppn-&+r2+^n4siakw4)@8+ua@i^a(yokss$+ln@-a2z=v8j"
)

DEBUG = False


if IS_HEROKU:
    ALLOWED_HOSTS = ["*"]
else:
    ALLOWED_HOSTS = []

# Static Files
STATIC_ROOT = BASE_DIR / "staticfiles"
STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"

CORS_ORIGIN_WHITELIST = [
    "http://localhost:4173",
    "https://students-classhub.vercel.app",
    "https://*.onrender.com",
]
CSRF_TRUSTED_ORIGINS = CORS_ORIGIN_WHITELIST


# Database
MAX_CONN_AGE = 600

DATABASES = {'default': dj_database_url.config(conn_max_age=600)}

# Configure django app for heroku
django_on_heroku.settings(locals())

