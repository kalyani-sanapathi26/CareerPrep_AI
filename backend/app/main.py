from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import aptitude

app = FastAPI()


# CORS Configuration

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Routes

app.include_router(
    aptitude.router,
    prefix="/aptitude",
    tags=["Aptitude"]
)


@app.get("/")
def home():

    return {
        "message": "CareerPrep AI Backend Running Successfully"
    }