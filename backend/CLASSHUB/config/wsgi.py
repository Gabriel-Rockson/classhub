"""
WSGI config for CLASSHUB project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.0/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault(
    "DJANGO_SETTINGS_MODULE",
    os.environ.get(
        "DJANGO_SETTINGS_MODULE", default="CLASSHUB.config.settings.base"
    ),
)

application = get_wsgi_application()
