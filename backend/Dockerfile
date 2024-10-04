FROM python:3.12-slim AS base

WORKDIR /app

# O'rnatish uchun kerakli tizim kutubxonasini o'rnating
RUN apt-get update && apt-get install -y --no-install-recommends \
      gcc \
      libmagic1 \
      && rm -rf /var/lib/apt/lists/*

# Poetry o'rnatish
RUN pip install --no-cache-dir poetry

# Poetry fayllarini ko'chirish
COPY pyproject.toml poetry.lock* /app/

# Virtualenv yaratmaslik va paketlarni o'rnatish
RUN poetry config virtualenvs.create false && \
      poetry install --no-dev --no-interaction --no-ansi

# Loyihani ko'chirish
COPY . .

EXPOSE 8000

# Gunicorn ishga tushirish
CMD ["gunicorn", "-w", "4", "-k", "uvicorn.workers.UvicornWorker", "main:app"]
