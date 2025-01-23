from django.db import models
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from wagtail.models import Page
from wagtail.models import Page
from wagtail.fields import RichTextField
from wagtail.admin.panels import FieldPanel
from wagtail.images.models import Image

# Create your models here.


class BlogPage(Page):

    def get_context(self, request, *args, **kwargs):
        """Adding custom stuff to our context."""
        context = super().get_context(request, *args, **kwargs)
        # Get all live and public blog posts
        blogs = BlogDetailPage.objects.live().public().order_by("-first_published_at")
        # Paginate the blogs queryset
        paginator = Paginator(blogs, 6)  # Show 10 blogs per page
        page = request.GET.get("page")  # Get the current page number from the request
        try:
            blogs_paginated = paginator.page(page)
        except PageNotAnInteger:
            # If page is not an integer, deliver the first page
            blogs_paginated = paginator.page(1)
        except EmptyPage:
            # If page is out of range (e.g., 9999), deliver the last page
            blogs_paginated = paginator.page(paginator.num_pages)
        # Add the paginated blogs to the context
        context["blogs"] = blogs_paginated
        return context


class BlogDetailPage(Page):

    blog_publish_date = models.DateField(
        auto_created=True,
        auto_now=True,
    )

    blog_title = models.CharField(
        verbose_name="Blog Title",
        max_length=255,
        null=True,
        blank=False,
    )
    blog_description = models.CharField(
        max_length=255,
        null=True,
        blank=False,
    )

    blog_body = RichTextField()

    blog_cover_image = models.ForeignKey(
        "wagtailimages.Image",
        null=True,
        blank=False,
        on_delete=models.SET_NULL,
        related_name="+",
    )

    content_panels = Page.content_panels + [
        FieldPanel("blog_title"),
        FieldPanel("blog_body"),
        # FieldPanel("blog_publish_date"),
        FieldPanel("blog_description"),
        FieldPanel("blog_cover_image"),
    ]
