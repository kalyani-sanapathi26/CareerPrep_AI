import sqlite3

connection = sqlite3.connect("careerprep.db")

cursor = connection.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS questions (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    topic TEXT NOT NULL,

    difficulty TEXT NOT NULL,

    question TEXT NOT NULL,

    option1 TEXT NOT NULL,

    option2 TEXT NOT NULL,

    option3 TEXT NOT NULL,

    option4 TEXT NOT NULL,

    answer TEXT NOT NULL,

    explanation TEXT NOT NULL

)
""")

connection.commit()

connection.close()

print("Database created successfully!")