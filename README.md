# Setting Up

Install UV

https://docs.astral.sh/uv/getting-started/installation/

## Setup istall the packages

```bash
uv sync
```

## Make migrations and migrate

```bash
uv run python manage.py makemigrations
uv run python manage.py migrate
```

## Seed the database with test blogs and news

```bash
uv run python manage.py generate_news
# uv run python manage.py populate_news
uv run python manage.py generate_blogs
```

## Start the Server

```bash
uv run python manage.py tailwind runserver
```
