from django import template

register = template.Library()

@register.filter
def lettercount(value):
    """Returns the number of characters in a string, including spaces and special characters."""
    return len(str(value))

