from django.db import models
from django.db import models

from wagtail.models import Page
from wagtail.admin.panels import FieldPanel
from wagtail.snippets.models import register_snippet
from wagtail.snippets.views.snippets import SnippetViewSet

from blog.models import BlogDetailPage, BlogCategory
from news.models import NewsDetailPage


@register_snippet
class MenuSnippets(models.Model):

    name = models.CharField(verbose_name="Menu Name", max_length=255)
    page = models.ForeignKey("wagtailcore.Page", on_delete=models.CASCADE)

    pannels = [
        FieldPanel("name"),
        FieldPanel("page"),
    ]

    def __str__(self):
        return self.name


class HomePage(Page):

    def get_context(self, request, *args, **kwargs):
        context = super().get_context(request, *args, **kwargs)
        blogs = (
            BlogDetailPage.objects.live()
            .public()
            .order_by(
                "-first_published_at",
            )[0:5]
        )
        news = (
            NewsDetailPage.objects.live()
            .public()
            .order_by(
                "-first_published_at",
            )[0:3]
        )
        context["blogs"] = blogs
        context["list_of_news"] = news
        context["categories"] = BlogCategory.objects.all()

        return context
