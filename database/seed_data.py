import sqlite3

connection = sqlite3.connect("careerprep.db")

cursor = connection.cursor()

questions = [

    (
        "Profit & Loss",
        "Easy",
        "A man buys an article for ₹800 and sells it at 20% profit. Selling price?",
        "900",
        "920",
        "960",
        "1000",
        "960",
        "20% of 800 = 160. Selling Price = 960"
    ),

    (
        "Number Series",
        "Easy",
        "2, 4, 8, 16, ?",
        "18",
        "24",
        "32",
        "64",
        "32",
        "Numbers are multiplied by 2."
    ),

    (
        "Time & Work",
        "Medium",
        "A can finish a work in 10 days and B in 15 days. Together?",
        "5",
        "6",
        "7",
        "8",
        "6",
        "1/10 + 1/15 = 1/6"
    )

]

cursor.executemany("""

INSERT INTO questions(

topic,
difficulty,
question,
option1,
option2,
option3,
option4,
answer,
explanation

)

VALUES(?,?,?,?,?,?,?,?,?)

""", questions)

connection.commit()

connection.close()

print("Sample questions inserted successfully!")