from django.db import models

from wagtail.models import Page

from blog.models import BlogDetailPage


class HomePage(Page):

    def get_context(self, request, *args, **kwargs):
        context = super().get_context(request, *args, **kwargs)
        blogs = (
            BlogDetailPage.objects.live().public().order_by("-first_published_at")[0:5]
        )
        context["blogs"] = blogs
        return context
