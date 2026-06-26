from fastapi import APIRouter
import sqlite3

router = APIRouter()

DATABASE = "database/careerprep.db"


def get_connection():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn


# Get all topics
@router.get("/topics")
def get_topics():

    conn = get_connection()

    cursor = conn.cursor()

    cursor.execute("SELECT DISTINCT topic FROM questions")

    topics = cursor.fetchall()

    conn.close()

    return [row["topic"] for row in topics]


# Get questions by topic and difficulty
@router.get("/questions/{topic}/{difficulty}")
def get_questions(topic: str, difficulty: str):

    conn = get_connection()

    cursor = conn.cursor()

    cursor.execute(
        """
        SELECT *
        FROM questions
        WHERE topic=? AND difficulty=?
        """,
        (topic, difficulty)
    )

    rows = cursor.fetchall()

    conn.close()

    questions = []

    for row in rows:

        questions.append({

            "id": row["id"],

            "topic": row["topic"],

            "difficulty": row["difficulty"],

            "question": row["question"],

            "options": [

                row["option1"],
                row["option2"],
                row["option3"],
                row["option4"]

            ],

            "answer": row["answer"],

            "explanation": row["explanation"]

        })

    return questions