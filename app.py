from pathlib import Path

from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

BASE_DIR = Path(__file__).resolve().parent

app = FastAPI()
app.mount("/assets", StaticFiles(directory=BASE_DIR / "assets"), name="assets")


@app.get("/")
def home():
    return FileResponse(BASE_DIR / "index.html")


@app.get("/styles.css")
def styles():
    return FileResponse(BASE_DIR / "styles.css")


@app.get("/script.js")
def script():
    return FileResponse(BASE_DIR / "script.js")


@app.get("/api/items/{item_id}")
def read_item(item_id: int):
    return {"item_id": item_id}
