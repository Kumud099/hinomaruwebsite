from django.db import models
from modelcluster.fields import ParentalKey
from wagtail.admin.panels import FieldPanel, FieldRowPanel, InlinePanel, MultiFieldPanel
from wagtail.fields import RichTextField
from wagtail.contrib.forms.models import AbstractEmailForm, AbstractFormField
from wagtail.models import Page


from blog.models import BlogDetailPage, BlogCategory
from news.models import NewsDetailPage


class FormField(AbstractFormField):
    page = ParentalKey("FormPage", on_delete=models.CASCADE, related_name="form_fields")


class FormPage(AbstractEmailForm):
    intro = RichTextField(blank=True)
    thank_you_text = RichTextField(blank=True)

    content_panels = AbstractEmailForm.content_panels + [
        FieldPanel("intro"),
        InlinePanel("form_fields", label="Form fields"),
        FieldPanel("thank_you_text"),
        MultiFieldPanel(
            [
                FieldRowPanel(
                    [
                        FieldPanel("from_address", classname="col6"),
                        FieldPanel("to_address", classname="col6"),
                    ]
                ),
                FieldPanel("subject"),
            ],
            "Email",
        ),
    ]

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