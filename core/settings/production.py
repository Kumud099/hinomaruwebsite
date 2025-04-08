from .base import *

DEBUG = False

ALLOWED_HOSTS = ["hinomaruwebsite.onrender.com"]  # Replace with your actual Render URL

STATICFILES_STORAGE = 'core.storage.IgnoreMissingManifestStaticFilesStorage'  # If using custom storage to avoid map file issues

# If using WhiteNoise to serve static files (recommended)
MIDDLEWARE.insert(1, "whitenoise.middleware.WhiteNoiseMiddleware")

STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

# Optional security settings for production
SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")
SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True

try:
    from .local import *
except ImportError:
    pass
