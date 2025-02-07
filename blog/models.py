from django.db import models
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django import forms

from modelcluster.fields import ParentalManyToManyField

from wagtail.models import Page
from wagtail.fields import RichTextField
from wagtail.admin.panels import FieldPanel, MultiFieldPanel
from wagtail.images.models import Image
from wagtail.snippets.models import register_snippet
from wagtail.contrib.routable_page.models import RoutablePageMixin, route


@register_snippet
class BlogCategory(models.Model):
    """Blog category for a snippet."""

    name = models.CharField(max_length=255)
    slug = models.SlugField(
        verbose_name="slug",
        allow_unicode=True,
        max_length=255,
        help_text="A slug to identify posts by this category",
    )

    panels = [
        FieldPanel("name"),
        FieldPanel("slug"),
    ]

    class Meta:
        verbose_name = "Blog Category"
        verbose_name_plural = "Blog Categories"
        ordering = ["name"]

    def __str__(self):
        return self.name


class BlogPage(RoutablePageMixin, Page):
    max_count = 1

    def get_context(self, request, *args, **kwargs):
        context = super().get_context(request, *args, **kwargs)

        blogs = BlogDetailPage.objects.live().public().order_by("-first_published_at")
        category_slug = request.GET.get("category", None)

        if category_slug:
            blogs = blogs.filter(categories__slug=category_slug)

        paginator = Paginator(blogs, 6)
        page = request.GET.get("page")
        try:
            blogs_paginated = paginator.page(page)
        except PageNotAnInteger:
            blogs_paginated = paginator.page(1)
        except EmptyPage:
            blogs_paginated = paginator.page(paginator.num_pages)

        context["blogs"] = blogs_paginated
        context["categories"] = BlogCategory.objects.all()
        context["selected_category"] = category_slug

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
    categories = ParentalManyToManyField("blog.BlogCategory", blank=True)

    content_panels = Page.content_panels + [
        FieldPanel("blog_title"),
        FieldPanel("blog_body"),
        FieldPanel("blog_description"),
        FieldPanel("blog_cover_image"),
        MultiFieldPanel(
            [FieldPanel("categories", widget=forms.CheckboxSelectMultiple)],
            heading="Categories",
        ),
    ]


    def get_context(self, request, *args, **kwargs):
        context = super().get_context(request, *args, **kwargs)

        blogs = BlogDetailPage.objects.live().public().order_by("-first_published_at")[:5]
   
        context["blogs"] = blogs
        context["categories"] = BlogCategory.objects.all()

        return context


