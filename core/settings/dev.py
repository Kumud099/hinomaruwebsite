from .base import *

DEBUG = True
SECRET_KEY = "django-insecure-s%$66rpw5_)tmrc2a$)$m&79v81f2%chu29+xht=o@r5%rmx81"
ALLOWED_HOSTS = ["*"]

EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"


try:
    from .local import *
except ImportError:
    pass
