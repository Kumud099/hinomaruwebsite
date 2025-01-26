from django.db import models

from wagtail.models import Page

from blog.models import BlogDetailPage, BlogCategory
from news.models import NewsDetailPage


class HomePage(Page):

    def get_context(self, request, *args, **kwargs):
        context = super().get_context(request, *args, **kwargs)
        blogs = (
            BlogDetailPage.objects.live().public().order_by("-first_published_at")[0:5]
        )
        news = (
            NewsDetailPage.objects.live().public().order_by("-first_published_at")[0:3]
        )
        context["blogs"] = blogs
        context["list_of_news"] = news
        context["categories"] = BlogCategory.objects.all()

        return context
