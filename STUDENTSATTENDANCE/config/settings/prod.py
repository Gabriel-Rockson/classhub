import os

import dj_database_url

from .base import *

SECRET_KEY = os.environ.get(
    "SECRET_KEY", default="hrhppn-&+r2+^n4siakw4)@8+ua@i^a(yokss$+ln@-a2z=v8j"
)

DEBUG = False

ALLOWED_HOSTS = []

# Static Files
STATIC_ROOT = BASE_DIR / "staticfiles"
STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"

# Render
RENDER_EXTERNAL_HOSTNAME = os.environ.get("RENDER_EXTERNAL_HOSTNAME")
if RENDER_EXTERNAL_HOSTNAME:
    ALLOWED_HOSTS.append(RENDER_EXTERNAL_HOSTNAME)

# Databases
DATABASES = {
    "default": dj_database_url.config(
        default="postgres://students_attendance_user:tg16chbacahdDcvCoRqVrRN2qqiom7rx@dpg-c9ktesc41ls49b94eek0-a/students_attendance_db_up8o",
        conn_max_age=600,
    )
}
