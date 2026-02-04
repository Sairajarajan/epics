import json
from pathlib import Path

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

ROOT_DIR = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT_DIR / "data"

app = FastAPI(title="SignSpark API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


def _read_json(path: Path, default):
    if not path.exists():
        return default
    return json.loads(path.read_text(encoding="utf-8"))


@app.get("/api/health")
def health_check():
    return {"status": "ok"}


@app.get("/api/signs")
def get_signs():
    default = [
        {
            "word": "Thank You",
            "category": "Gratitude",
            "animation": "",
            "video": "",
            "caption": "Move your hand from your chin outward.",
        }
    ]
    data = _read_json(DATA_DIR / "signs.json", default)
    return {"items": data}


@app.get("/api/lessons")
def get_lessons():
    default = [
        {"title": "Greetings with Sunny", "minutes": 6, "video": "", "caption": "Basics"}
    ]
    data = _read_json(DATA_DIR / "lessons.json", default)
    return {"items": data}


@app.get("/api/alphabet")
def get_alphabet():
    fallback = [
        {"letter": letter, "image": "", "caption": "Sample animation"}
        for letter in "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    ]
    if (DATA_DIR / "sign_mnist_alphabet.json").exists():
        data = _read_json(DATA_DIR / "sign_mnist_alphabet.json", fallback)
        return {"items": data}
    return {"items": fallback}


app.mount("/", StaticFiles(directory=ROOT_DIR, html=True), name="static")
