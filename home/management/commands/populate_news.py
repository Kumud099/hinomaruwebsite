from django.core.management.base import BaseCommand
from wagtail.models import Page
from wagtail.images.models import Image
from faker import Faker
import requests
from django.core.files.base import ContentFile
from news.models import NewsDetailPage, NewsPage
from django.utils.text import slugify


class Command(BaseCommand):
    help = "Populates the database with 10 blog posts with fake images."

    def handle(self, *args, **kwargs):
        fake = Faker()
        news_list_page = NewsPage.objects.first()

        for i in range(10):
            # Generate a fake title and slug
            news_title = fake.sentence(nb_words=6)
            slug = slugify(news_title)  # Generate a slug from the title

            # Create the NewsDetailPage instance
            news = NewsDetailPage(
                title=news_title,  # Set the required `title` field
                slug=slug,  # Set the required `slug` field
                news_title=news_title,
                news_description=fake.paragraph(nb_sentences=3),
                news_body="\n".join(fake.paragraphs(nb=5)),
            )

            # Add the news post to the news list page
            news_list_page.add_child(instance=news)
            news.save()

            self.stdout.write(self.style.SUCCESS(f"Created news: {news.news_title}"))

        self.stdout.write(self.style.SUCCESS("Successfully populated 10 news posts."))
