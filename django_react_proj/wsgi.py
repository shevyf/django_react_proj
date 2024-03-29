"""
WSGI config for django_react_proj project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

import newrelic.agent
newrelic.agent.initialize('/var/django/django_react_proj/django_react_proj/newrelic.ini')

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'django_react_proj.settings')

application = get_wsgi_application()
# application = newrelic.agent.WSGIApplicationWrapper(application)
