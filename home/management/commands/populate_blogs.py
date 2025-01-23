from django.core.management.base import BaseCommand
from wagtail.models import Page
from wagtail.images.models import Image
from faker import Faker
import requests
from django.core.files.base import ContentFile
from blog.models import BlogDetailPage, BlogPage


class Command(BaseCommand):
    help = "Populates the database with 10 blog posts with fake images."

    def handle(self, *args, **kwargs):
        fake = Faker()  # Initialize Faker for generating fake data
        blog_list_page = BlogPage.objects.first()

        for i in range(10):
            # Generate fake blog data
            blog = BlogDetailPage(
                title=fake.sentence(nb_words=6),
                blog_title=fake.sentence(nb_words=6),
                blog_description=fake.paragraph(nb_sentences=3),
                blog_body="\n".join(fake.paragraphs(nb=5)),
                blog_publish_date=fake.date_between(
                    start_date="-30d", end_date="today"
                ),
            )

            # Generate a fake image URL and download it
            image_url = fake.image_url(
                width=800, height=600
            )  # Generate a placeholder image URL
            response = requests.get(image_url, stream=True)

            if response.status_code == 200:
                # Save the image to the blog_cover_image field
                image_name = f"blog_cover_{i}.jpg"
                image_file = ContentFile(response.content, name=image_name)
                blog.blog_cover_image = Image.objects.create(
                    title=f"Blog Cover {i}",
                    file=image_file,
                )

            # Add the blog to the blog list page
            blog_list_page.add_child(instance=blog)
            blog.save()

            self.stdout.write(self.style.SUCCESS(f"Created blog: {blog.blog_title}"))

        self.stdout.write(
            self.style.SUCCESS("Successfully populated 10 blog posts with fake images.")
        )
