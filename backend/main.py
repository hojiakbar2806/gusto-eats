from urllib.parse import unquote

from fastapi import FastAPI
from api.auth import auth_router
from core.config import settings
from fastapi.responses import FileResponse
from contextlib import asynccontextmanager
from database.session import create_tables


@asynccontextmanager
async def lifespan(app: FastAPI):
    await create_tables()
    yield


app = FastAPI(
    title="FastAPI",
    description="FastAPI",
    version="1.0.0",
    lifespan=lifespan,
)

# app.include_router(auth_router)


@app.get("/")
async def root():
    return {"message": "It works"}


@app.get("/media/{path:path}")
async def read_media(path: str):
    file_path = unquote(f"{settings.media_dir}/{path}")
    return FileResponse(file_path)
