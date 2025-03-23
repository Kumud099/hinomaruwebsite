from django.db import models
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from wagtail.models import Page
from wagtail.fields import RichTextField
from wagtail.admin.panels import FieldPanel


class NewsDetailPage(Page):
    news_publish_date = models.DateField(auto_created=True, auto_now=True)
    news_title = models.CharField(
        verbose_name="News Title", max_length=255, null=True, blank=False
    )
    news_description = models.CharField(
        verbose_name="News Description", max_length=255, blank=False, null=True
    )
    news_body = RichTextField()

    content_panels = Page.content_panels + [
        FieldPanel("news_title"),
        FieldPanel("news_description"),
        FieldPanel("news_body"),
    ]

    def get_context(self, request, *args, **kwargs):
        context = super().get_context(request, *args, **kwargs)
    
        news = (
            NewsDetailPage.objects.live()
            .public()
            .order_by(
                "-first_published_at",
            )[0:4]
        )
   
        context["list_of_news"] = news

        return context

class NewsPage(Page):
    max_count = 1

    def get_context(self, request, *args, **kwargs):
        context = super().get_context(request, *args, **kwargs)
        news = NewsDetailPage.objects.live().public().order_by("-first_published_at")
        paginator = Paginator(news, 6)
        page = request.GET.get("page")
        try:
            news_paginated = paginator.page(page)
        except PageNotAnInteger:
            news_paginated = paginator.page(1)
        except EmptyPage:
            news_paginated = paginator.page(paginator.num_pages)

        context["news"] = news_paginated
        return context
