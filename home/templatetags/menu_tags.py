from django import template
from home.models import MenuSnippets

register = template.Library()


@register.inclusion_tag("home/tags/menus.html", takes_context=True)
def menus(context):
    return {
        "menus": MenuSnippets.objects.all(),
        "request": context["request"],
    }
