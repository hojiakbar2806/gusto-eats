FROM python:3.12-alpine AS builder

RUN pip install --upgrade pip

WORKDIR /app
COPY pyproject.toml poetry.lock /app/

RUN pip install poetry && poetry install --no-root

COPY . /app/

FROM python:3.12-alpine

WORKDIR /app
COPY --from=builder /app /app

EXPOSE 8000

CMD ["gunicorn", "-w", "4", "-k", "uvicorn.workers.UvicornWorker", "app.main:app"]
