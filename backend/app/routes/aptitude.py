from fastapi import APIRouter
import json

router = APIRouter()


with open(
    "../database/questions/aptitude.json",
    "r"
) as file:

    questions_db = json.load(file)


# Get Topics

@router.get("/topics")
def get_topics():

    return list(questions_db.keys())


# Get Questions by Topic + Difficulty

@router.get("/questions/{topic}/{difficulty}")
def get_questions(topic: str, difficulty: str):

    questions = questions_db.get(topic, [])


    filtered_questions = [

        question

        for question in questions

        if question["difficulty"] == difficulty

    ]


    return filtered_questions